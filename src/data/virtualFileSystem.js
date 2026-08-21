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
        content: `${portfolioData.personal.name} - ${portfolioData.personal.title}\n${portfolioData.personal.degree} (CGPA: ${portfolioData.personal.cgpa})\n\n${portfolioData.personal.bio}`
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
          'highschool.txt': {
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
        content: {
          'rag-story.txt': {
            type: 'file',
            content: `${portfolioData.stories[0].title}\n\nSummary: ${portfolioData.stories[0].summary}\n\n${portfolioData.stories[0].content}`
          },
          'computer-vision-story.txt': {
            type: 'file',
            content: `${portfolioData.stories[1].title}\n\nSummary: ${portfolioData.stories[1].summary}\n\n${portfolioData.stories[1].content}`
          }
        }
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
        content: {
          'leetcode.txt': {
            type: 'file',
            content: `Platform: LeetCode\nRating: ${portfolioData.coding[0].rating}\nProblems Solved: ${portfolioData.coding[0].solved}\nProfile: ${portfolioData.coding[0].profile}`
          },
          'hackerrank.txt': {
            type: 'file',
            content: `Platform: HackerRank\nRating: ${portfolioData.coding[1].rating}\nChallenges: ${portfolioData.coding[1].solved}\nProfile: ${portfolioData.coding[1].profile}`
          },
          'codechef.txt': {
            type: 'file',
            content: `Platform: CodeChef\nRating: ${portfolioData.coding[2].rating}\nProblems Solved: ${portfolioData.coding[2].solved}\nProfile: ${portfolioData.coding[2].profile}`
          }
        }
      },

      'achievements': {
        type: 'dir',
        content: {
          'awards.txt': {
            type: 'file',
            content: `Award: ${portfolioData.achievements[0].title} (${portfolioData.achievements[0].year})\nDetails: ${portfolioData.achievements[0].desc}`
          },
          'certifications.txt': {
            type: 'file',
            content: `Certification: ${portfolioData.achievements[1].title} (${portfolioData.achievements[1].year})\nDetails: ${portfolioData.achievements[1].desc}`
          },
          'publication.txt': {
            type: 'file',
            content: `Paper: ${portfolioData.achievements[2].title} (${portfolioData.achievements[2].year})\nDetails: ${portfolioData.achievements[2].desc}`
          }
        }
      },

      'activities': {
        type: 'dir',
        content: {
          'community.txt': {
            type: 'file',
            content: `${portfolioData.activities[0].title}\n\n${portfolioData.activities[0].desc}`
          },
          'open-source.txt': {
            type: 'file',
            content: `${portfolioData.activities[1].title}\n\n${portfolioData.activities[1].desc}`
          }
        }
      },

      'blogs': {
        type: 'dir',
        content: {
          'ai-trends.txt': {
            type: 'file',
            content: `Article: ${portfolioData.blogs[0].title}\nDate: ${portfolioData.blogs[0].date} | ${portfolioData.blogs[0].readTime}\n\n${portfolioData.blogs[0].snippet}`
          },
          'clean-code.txt': {
            type: 'file',
            content: `Article: ${portfolioData.blogs[1].title}\nDate: ${portfolioData.blogs[1].date} | ${portfolioData.blogs[1].readTime}\n\n${portfolioData.blogs[1].snippet}`
          }
        }
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
