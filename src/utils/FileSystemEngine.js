import { initialFileSystem } from '../data/virtualFileSystem';

export class FileSystemEngine {
  constructor() {
    this.fs = JSON.parse(JSON.stringify(initialFileSystem));
  }

  // Normalize path segments into canonical array
  parsePath(currentPath, targetPath) {
    let segments = (!currentPath || currentPath === '~') ? ['~'] : currentPath.split('/');

    if (!targetPath || targetPath === '.') {
      return segments;
    }

    if (targetPath === '~' || targetPath === '~/') {
      return ['~'];
    }

    if (targetPath === '/') {
      return ['~'];
    }

    if (targetPath.startsWith('~/')) {
      segments = ['~'];
      targetPath = targetPath.substring(2);
    } else if (targetPath.startsWith('~')) {
      segments = ['~'];
      targetPath = targetPath.substring(1);
    } else if (targetPath.startsWith('/')) {
      segments = ['~'];
      targetPath = targetPath.substring(1);
    }

    const parts = targetPath.split('/').filter(p => p !== '' && p !== '.');

    for (const part of parts) {
      if (part === '..') {
        if (segments.length > 1) {
          segments.pop();
        }
      } else {
        segments.push(part);
      }
    }

    return segments;
  }

  // Convert path array to string representation
  pathToString(pathArray) {
    if (!pathArray || pathArray.length === 0 || (pathArray.length === 1 && pathArray[0] === '~')) {
      return '~';
    }
    return pathArray.join('/');
  }

  // Retrieve node object at path array
  getNode(pathArray) {
    if (!pathArray || pathArray.length === 0) return null;
    if (pathArray[0] !== '~') return null;

    let current = this.fs['~'];
    if (pathArray.length === 1) return current;

    for (let i = 1; i < pathArray.length; i++) {
      const seg = pathArray[i];
      if (current && current.type === 'dir' && current.content && current.content[seg]) {
        current = current.content[seg];
      } else {
        return null;
      }
    }

    return current;
  }

  // Resolve directory object
  getDirectory(currentPath, targetPath = '') {
    const pathArray = this.parsePath(currentPath, targetPath);
    const node = this.getNode(pathArray);
    if (node && node.type === 'dir') {
      return { node, path: this.pathToString(pathArray), pathArray };
    }
    return null;
  }

  // Resolve file object
  getFile(currentPath, targetPath) {
    if (!targetPath) return null;
    const pathArray = this.parsePath(currentPath, targetPath);
    let node = this.getNode(pathArray);

    if (node && node.type === 'file') {
      return { node, path: this.pathToString(pathArray), fileName: pathArray[pathArray.length - 1] };
    }

    // Smart fallback: try appending .txt if file not found
    if (!node && !targetPath.endsWith('.txt')) {
      const altPathArray = this.parsePath(currentPath, `${targetPath}.txt`);
      node = this.getNode(altPathArray);
      if (node && node.type === 'file') {
        return { node, path: this.pathToString(altPathArray), fileName: altPathArray[altPathArray.length - 1] };
      }
    }

    return null;
  }

  // List directory items
  ls(currentPath, targetPath = '') {
    const dirResult = this.getDirectory(currentPath, targetPath);
    if (!dirResult) {
      // Check if target is a file
      const fileResult = this.getFile(currentPath, targetPath);
      if (fileResult) {
        return { success: true, isFile: true, item: fileResult.fileName };
      }
      return { success: false, error: `ls: cannot access '${targetPath}': No such file or directory` };
    }

    const items = [];
    const content = dirResult.node.content || {};

    for (const key in content) {
      const item = content[key];
      items.push({
        name: key,
        type: item.type,
        isExec: key.endsWith('.sh') || key === 'resume'
      });
    }

    return { success: true, items, path: dirResult.path };
  }

  // Read file content
  cat(currentPath, filePath) {
    if (!filePath) {
      return { success: false, error: 'cat: missing operand' };
    }

    const fileResult = this.getFile(currentPath, filePath);
    if (!fileResult) {
      const dirResult = this.getDirectory(currentPath, filePath);
      if (dirResult) {
        return { success: false, error: `cat: ${filePath}: Is a directory` };
      }
      return { success: false, error: `cat: ${filePath}: No such file or directory` };
    }

    return { success: true, content: fileResult.node.content, fileName: fileResult.fileName };
  }

  // Grep content search across files or glob patterns (e.g. internships/*)
  grep(currentPath, query, pattern = '*', isCaseInsensitive = true) {
    if (!query) {
      return { success: false, error: 'grep: missing search query' };
    }

    let targetDirStr = '';
    let fileWildcard = '*';

    if (pattern.includes('/')) {
      const lastSlash = pattern.lastIndexOf('/');
      targetDirStr = pattern.substring(0, lastSlash);
      fileWildcard = pattern.substring(lastSlash + 1);
    } else if (pattern !== '*') {
      fileWildcard = pattern;
    }

    const dirResult = this.getDirectory(currentPath, targetDirStr);
    if (!dirResult) {
      return { success: false, error: `grep: ${targetDirStr || currentPath}: No such directory` };
    }

    const matches = [];
    const content = dirResult.node.content || {};

    const wildcardRegex = new RegExp(
      '^' + fileWildcard.replace(/\./g, '\\.').replace(/\*/g, '.*') + '$'
    );

    for (const fileName in content) {
      const item = content[fileName];
      if (item.type === 'file' && wildcardRegex.test(fileName)) {
        const lines = item.content.split('\n');
        lines.forEach((line, index) => {
          const matchCondition = isCaseInsensitive
            ? line.toLowerCase().includes(query.toLowerCase())
            : line.includes(query);

          if (matchCondition) {
            matches.push({
              file: `${dirResult.path}/${fileName}`,
              lineNum: index + 1,
              content: line
            });
          }
        });
      }
    }

    return { success: true, matches, query };
  }

  // Recursively find files/directories
  find(currentPath, targetName = '') {
    const dirResult = this.getDirectory(currentPath, '');
    const results = [];

    const traverse = (node, currentPathStr) => {
      if (!node || node.type !== 'dir') return;
      const content = node.content || {};

      for (const name in content) {
        const fullPath = `${currentPathStr}/${name}`;
        const item = content[name];
        
        if (!targetName || name.toLowerCase().includes(targetName.toLowerCase())) {
          results.push({ name, path: fullPath, type: item.type });
        }

        if (item.type === 'dir') {
          traverse(item, fullPath);
        }
      }
    };

    if (dirResult) {
      traverse(dirResult.node, dirResult.path);
    }

    return { success: true, results };
  }

  // Generate structured tree view of file system
  tree(currentPath = '~', targetPath = '') {
    const dirResult = this.getDirectory(currentPath, targetPath);
    if (!dirResult) {
      return { success: false, error: `tree: ${targetPath || currentPath}: No such directory` };
    }

    let dirCount = 0;
    let fileCount = 0;

    const buildTree = (node, prefix = '') => {
      let lines = [];
      const content = node.content || {};
      const keys = Object.keys(content);

      keys.forEach((key, index) => {
        const isLast = index === keys.length - 1;
        const connector = isLast ? '└── ' : '├── ';
        const childPrefix = isLast ? '    ' : '│   ';
        const item = content[key];

        if (item.type === 'dir') {
          dirCount++;
          lines.push({
            text: `${prefix}${connector}${key}/`,
            type: 'dir'
          });
          const subLines = buildTree(item, prefix + childPrefix);
          lines = lines.concat(subLines);
        } else {
          fileCount++;
          lines.push({
            text: `${prefix}${connector}${key}`,
            type: 'file'
          });
        }
      });

      return lines;
    };

    const treeLines = buildTree(dirResult.node);

    return {
      success: true,
      rootName: dirResult.path,
      lines: treeLines,
      stats: { directories: dirCount, files: fileCount }
    };
  }
}
