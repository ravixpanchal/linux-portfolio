import { portfolioData } from './portfolioData';

// Helper to format project cards
const formatProjectContent = (proj) => {
  return `project: ${proj.name}
stack: ${proj.stack.join(', ')}
desc: ${proj.desc}

Highlights:
${proj.highlights.map(h => `- ${h}`).join('\n')}`;
};

// Helper to format internship files
const formatInternshipContent = (intern) => {
  return `Role: ${intern.role}
Company: ${intern.company}
Period: ${intern.period}
Location: ${intern.location}
Tech Stack: ${intern.tech.join(', ')}

Details:
${intern.details.map(d => `- ${d}`).join('\n')}`;
};

// Construct virtual tree
export const initialFileSystem = {
  '~': {
    type: 'dir',
    content: {
      'about.txt': {
        type: 'file',
        content: portfolioData.about
      },
      'overview.txt': {
        type: 'file',
        content: `Ravi Panchal's Interactive Portfolio Terminal v2.4.0\nType 'help' to see all supported commands or 'guide' for recommended exploration.`
      },

      'introduction': {
        type: 'dir',
        content: {
          'bio.txt': {
            type: 'file',
            content: portfolioData.introduction
          },
          'contact_summary.txt': {
            type: 'file',
            content: `Email: ${portfolioData.personal.email}\nGitHub: ${portfolioData.personal.github}\nLinkedIn: ${portfolioData.personal.linkedin}`
          }
        }
      },

      'internships': {
        type: 'dir',
        content: {
          'bisag-n.txt': {
            type: 'file',
            content: formatInternshipContent(portfolioData.internships[0])
          },
          'aai.txt': {
            type: 'file',
            content: formatInternshipContent(portfolioData.internships[1])
          },
          'drm-jhansi.txt': {
            type: 'file',
            content: formatInternshipContent(portfolioData.internships[2])
          }
        }
      },

      'education': {
        type: 'dir',
        content: {
          'btech-aids.txt': {
            type: 'file',
            content: `Degree: ${portfolioData.education[0].degree}\nInstitution: ${portfolioData.education[0].institution}\nPeriod: ${portfolioData.education[0].period}\nScore: ${portfolioData.education[0].score}\n\nCore Coursework:\n- ${portfolioData.education[0].courses.join('\n- ')}`
          },
          'school.txt': {
            type: 'file',
            content: `Degree: ${portfolioData.education[1].degree}\nInstitution: ${portfolioData.education[1].institution}\nPeriod: ${portfolioData.education[1].period}\nScore: ${portfolioData.education[1].score}`
          }
        }
      },

      'projects': {
        type: 'dir',
        content: {
          'osteoporosis-ai.txt': {
            type: 'file',
            content: formatProjectContent(portfolioData.projects[0])
          },
          'railway-safety.txt': {
            type: 'file',
            content: formatProjectContent(portfolioData.projects[1])
          },
          'x-automation.txt': {
            type: 'file',
            content: formatProjectContent(portfolioData.projects[2])
          },
          'gst-ai-insights.txt': {
            type: 'file',
            content: formatProjectContent(portfolioData.projects[3])
          },
          'rag-assistant.txt': {
            type: 'file',
            content: formatProjectContent(portfolioData.projects[4])
          }
        }
      },

      'project-stories': {
        type: 'dir',
        content: portfolioData.stories.reduce((acc, story) => {
          acc[story.file] = {
            type: 'file',
            content: `${story.title}\n\nSummary: ${story.summary}\n\n${story.content}`
          };
          return acc;
        }, {})
      },

      'skills': {
        type: 'dir',
        content: {
          'programming.txt': {
            type: 'file',
            content: `Programming Languages:\n- ${portfolioData.skills.programming.join('\n- ')}`
          },
          'ai-ml.txt': {
            type: 'file',
            content: `AI / Machine Learning Stack:\n- ${portfolioData.skills.ai_ml.join('\n- ')}`
          },
          'web-dev.txt': {
            type: 'file',
            content: `Fullstack Web Frameworks:\n- ${portfolioData.skills.web_dev.join('\n- ')}`
          },
          'tools.txt': {
            type: 'file',
            content: `DevOps & Cloud Tools:\n- ${portfolioData.skills.tools.join('\n- ')}`
          }
        }
      },

      'coding': {
        type: 'dir',
        content: portfolioData.coding.reduce((acc, item) => {
          const fileName = item.file || `${item.platform.toLowerCase()}.txt`;
          acc[fileName] = {
            type: 'file',
            content: `Platform: ${item.platform}\nRating: ${item.rating}\nProblems Solved: ${item.solved}\nProfile: ${item.profile}`
          };
          return acc;
        }, {})
      },

      'achievements': {
        type: 'dir',
        content: portfolioData.achievements.reduce((acc, item) => {
          const fileName = item.file || 'achievement.txt';
          acc[fileName] = {
            type: 'file',
            content: `${item.title} (${item.year})\nDetails: ${item.desc}`
          };
          return acc;
        }, {})
      },

      'activities': {
        type: 'dir',
        content: portfolioData.activities.reduce((acc, item) => {
          const fileName = item.file || 'activity.txt';
          acc[fileName] = {
            type: 'file',
            content: `${item.title}\n\n${item.desc}`
          };
          return acc;
        }, {})
      },

      'blogs': {
        type: 'dir',
        content: portfolioData.blogs.reduce((acc, item) => {
          const fileName = item.file || 'blog.txt';
          acc[fileName] = {
            type: 'file',
            content: `Article: ${item.title}\nDate: ${item.date} | ${item.readTime}\n\n${item.snippet}\n\n📖 Read full article:\n${item.url}`
          };
          return acc;
        }, {})
      },

      'resume': {
        type: 'dir',
        content: {
          'resume.txt': {
            type: 'file',
            content: `Ravi Panchal - Resume\nLink: ${portfolioData.personal.resumeUrl}\n\nType 'resume' command to directly download or open resume in browser.`
          }
        }
      },

      'contact': {
        type: 'dir',
        content: {
          'email.txt': {
            type: 'file',
            content: `Email: ${portfolioData.personal.email}`
          },
          'socials.txt': {
            type: 'file',
            content: `GitHub: ${portfolioData.personal.github}\nLinkedIn: ${portfolioData.personal.linkedin}`
          }
        }
      }
    }
  }
};
