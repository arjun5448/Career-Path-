export interface Role {
  id: string;
  title: string;
  subtype: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  avgSalary: string;
  skills: string[];
  tools: string[];
  studyPlan90: StudyWeek[];
  studyPlan120: StudyWeek[];
  resources: Resource[];
}

export interface StudyWeek {
  week: number;
  title: string;
  topics: string[];
  projects: string[];
  resources: string[];
}

export interface Resource {
  type: 'course' | 'book' | 'video' | 'practice' | 'certification';
  title: string;
  url: string;
  free: boolean;
  provider: string;
  rating: number;
}

export interface Domain {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  roles: Role[];
  marketGrowth: string;
  avgSalaryRange: string;
}

export const allDomains: Domain[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Building modern web applications and websites',
    icon: 'Code',
    color: 'from-blue-500 to-purple-600',
    marketGrowth: '+13% annually',
    avgSalaryRange: '$65K - $150K',
    roles: [
      {
        id: 'frontend-dev',
        title: 'Frontend Developer',
        subtype: 'React, Angular, Vue',
        description: 'Create interactive user interfaces and experiences',
        difficulty: 'Intermediate',
        avgSalary: '$85K',
        skills: ['HTML/CSS', 'JavaScript', 'React', 'TypeScript', 'Responsive Design'],
        tools: ['VS Code', 'Git', 'Chrome DevTools', 'Figma', 'Webpack'],
        studyPlan90: [
          {
            week: 1,
            title: 'HTML & CSS Fundamentals',
            topics: ['HTML5 Semantic Elements', 'CSS Grid & Flexbox', 'Responsive Design'],
            projects: ['Personal Portfolio Website'],
            resources: ['freeCodeCamp HTML/CSS', 'MDN Web Docs']
          },
          {
            week: 2,
            title: 'JavaScript Essentials',
            topics: ['ES6+ Features', 'DOM Manipulation', 'Async Programming'],
            projects: ['Interactive To-Do App'],
            resources: ['JavaScript.info', 'Eloquent JavaScript']
          },
          {
            week: 3,
            title: 'React Fundamentals',
            topics: ['Components', 'State Management', 'Hooks'],
            projects: ['React Weather App'],
            resources: ['React Documentation', 'React Tutorial']
          }
        ],
        studyPlan120: [
          {
            week: 1,
            title: 'Web Fundamentals Deep Dive',
            topics: ['HTTP/HTTPS', 'Browser Architecture', 'Performance Optimization'],
            projects: ['Static Landing Page'],
            resources: ['MDN Web Docs', 'Web.dev']
          },
          {
            week: 2,
            title: 'Advanced CSS',
            topics: ['CSS Animations', 'Sass/SCSS', 'CSS-in-JS'],
            projects: ['Animated Portfolio'],
            resources: ['CSS Tricks', 'Sass Documentation']
          }
        ],
        resources: [
          {
            type: 'course',
            title: 'The Complete Web Developer Course',
            url: 'https://udemy.com/course/complete-web-developer-course',
            free: false,
            provider: 'Udemy',
            rating: 4.7
          },
          {
            type: 'course',
            title: 'freeCodeCamp Responsive Web Design',
            url: 'https://freecodecamp.org/learn/responsive-web-design',
            free: true,
            provider: 'freeCodeCamp',
            rating: 4.8
          }
        ]
      },
      {
        id: 'backend-dev',
        title: 'Backend Developer',
        subtype: 'Node.js, Java, Python',
        description: 'Build server-side applications and APIs',
        difficulty: 'Intermediate',
        avgSalary: '$95K',
        skills: ['Node.js', 'Database Design', 'REST APIs', 'Authentication', 'Cloud Deployment'],
        tools: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Docker'],
        studyPlan90: [
          {
            week: 1,
            title: 'Server Fundamentals',
            topics: ['HTTP Methods', 'Request/Response Cycle', 'Node.js Basics'],
            projects: ['Simple HTTP Server'],
            resources: ['Node.js Documentation', 'Express.js Guide']
          }
        ],
        studyPlan120: [
          {
            week: 1,
            title: 'Backend Architecture',
            topics: ['MVC Pattern', 'Database Design', 'API Design Principles'],
            projects: ['REST API with Database'],
            resources: ['Clean Architecture Book', 'API Design Patterns']
          }
        ],
        resources: [
          {
            type: 'course',
            title: 'Node.js Complete Guide',
            url: 'https://udemy.com/course/nodejs-complete-guide',
            free: false,
            provider: 'Udemy',
            rating: 4.6
          }
        ]
      },
      {
        id: 'fullstack-dev',
        title: 'Full Stack Developer',
        subtype: 'MERN, MEAN, Django+React',
        description: 'Master both frontend and backend development',
        difficulty: 'Advanced',
        avgSalary: '$105K',
        skills: ['Frontend Frameworks', 'Backend APIs', 'Database Management', 'DevOps Basics', 'System Design'],
        tools: ['React', 'Node.js', 'MongoDB', 'Git', 'AWS/Heroku'],
        studyPlan90: [
          {
            week: 1,
            title: 'Full Stack Foundations',
            topics: ['Client-Server Architecture', 'Database Connections', 'Authentication Flow'],
            projects: ['Full Stack Blog App'],
            resources: ['Full Stack Open Course', 'MERN Stack Tutorial']
          }
        ],
        studyPlan120: [
          {
            week: 1,
            title: 'Advanced Full Stack Concepts',
            topics: ['Microservices', 'Caching Strategies', 'Performance Optimization'],
            projects: ['E-commerce Platform'],
            resources: ['System Design Primer', 'Microservices Patterns']
          }
        ],
        resources: [
          {
            type: 'course',
            title: 'Full Stack Web Development Bootcamp',
            url: 'https://udemy.com/course/complete-web-development-bootcamp',
            free: false,
            provider: 'Udemy',
            rating: 4.7
          }
        ]
      },
      {
        id: 'web-designer',
        title: 'Web Designer',
        subtype: 'Static / Creative Design',
        description: 'Create visually appealing and user-friendly web designs',
        difficulty: 'Beginner',
        avgSalary: '$65K',
        skills: ['Adobe Creative Suite', 'Figma', 'HTML/CSS', 'Typography', 'Color Theory'],
        tools: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Sketch'],
        studyPlan90: [
          {
            week: 1,
            title: 'Design Fundamentals',
            topics: ['Design Principles', 'Color Theory', 'Typography'],
            projects: ['Brand Identity Design'],
            resources: ['Design Course', 'Adobe Tutorials']
          }
        ],
        studyPlan120: [
          {
            week: 1,
            title: 'Advanced Design Concepts',
            topics: ['User Psychology', 'Visual Hierarchy', 'Design Systems'],
            projects: ['Complete Website Redesign'],
            resources: ['Design Systems Guide', 'UX Planet']
          }
        ],
        resources: [
          {
            type: 'course',
            title: 'Web Design for Beginners',
            url: 'https://udemy.com/course/web-design-for-beginners',
            free: false,
            provider: 'Udemy',
            rating: 4.5
          }
        ]
      },
      {
        id: 'ui-ux-developer',
        title: 'UI/UX Developer',
        subtype: 'Interactive Interfaces',
        description: 'Bridge design and development with interactive prototypes',
        difficulty: 'Intermediate',
        avgSalary: '$90K',
        skills: ['Prototyping', 'User Research', 'Frontend Development', 'Design Systems', 'Accessibility'],
        tools: ['Figma', 'Framer', 'React', 'CSS Animations', 'Storybook'],
        studyPlan90: [
          {
            week: 1,
            title: 'UI/UX Foundations',
            topics: ['User Research', 'Wireframing', 'Prototyping'],
            projects: ['Interactive Prototype'],
            resources: ['UX Design Course', 'Figma Tutorials']
          }
        ],
        studyPlan120: [
          {
            week: 1,
            title: 'Advanced UI/UX Development',
            topics: ['Design Systems', 'Accessibility', 'Micro-interactions'],
            projects: ['Complete Design System'],
            resources: ['Design Systems Handbook', 'A11y Guidelines']
          }
        ],
        resources: [
          {
            type: 'course',
            title: 'UI/UX Design Specialization',
            url: 'https://coursera.org/specializations/ui-ux-design',
            free: false,
            provider: 'Coursera',
            rating: 4.6
          }
        ]
      }
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Protecting digital assets and infrastructure',
    icon: 'Shield',
    color: 'from-red-500 to-orange-600',
    marketGrowth: '+31% annually',
    avgSalaryRange: '$80K - $180K',
    roles: [
      {
        id: 'security-analyst',
        title: 'Security Analyst',
        subtype: 'Monitoring & Policy',
        description: 'Monitor and analyze security threats and incidents',
        difficulty: 'Intermediate',
        avgSalary: '$90K',
        skills: ['Risk Assessment', 'Incident Response', 'Security Policies', 'SIEM Tools', 'Compliance'],
        tools: ['Splunk', 'Wireshark', 'Nessus', 'Metasploit', 'Burp Suite'],
        studyPlan90: [
          {
            week: 1,
            title: 'Security Fundamentals',
            topics: ['CIA Triad', 'Common Vulnerabilities', 'Risk Management'],
            projects: ['Security Assessment Report'],
            resources: ['CISSP Study Guide', 'Security+ Materials']
          }
        ],
        studyPlan120: [
          {
            week: 1,
            title: 'Advanced Security Analysis',
            topics: ['Threat Modeling', 'Forensics Basics', 'Compliance Frameworks'],
            projects: ['Complete Security Audit'],
            resources: ['NIST Cybersecurity Framework', 'OWASP Top 10']
          }
        ],
        resources: [
          {
            type: 'certification',
            title: 'CompTIA Security+',
            url: 'https://comptia.org/certifications/security',
            free: false,
            provider: 'CompTIA',
            rating: 4.5
          }
        ]
      },
      {
        id: 'ethical-hacker',
        title: 'Ethical Hacker / Pen Tester',
        subtype: 'Attack Simulation',
        description: 'Identify vulnerabilities through controlled attacks',
        difficulty: 'Advanced',
        avgSalary: '$120K',
        skills: ['Penetration Testing', 'Vulnerability Assessment', 'Social Engineering', 'Network Security', 'Web App Security'],
        tools: ['Kali Linux', 'Metasploit', 'Burp Suite', 'Nmap', 'John the Ripper'],
        studyPlan90: [
          {
            week: 1,
            title: 'Ethical Hacking Basics',
            topics: ['Reconnaissance', 'Scanning', 'Enumeration'],
            projects: ['Basic Penetration Test'],
            resources: ['CEH Study Materials', 'TryHackMe Platform']
          }
        ],
        studyPlan120: [
          {
            week: 1,
            title: 'Advanced Penetration Testing',
            topics: ['Advanced Exploitation', 'Post-Exploitation', 'Report Writing'],
            projects: ['Full Penetration Test Report'],
            resources: ['OSCP Certification Path', 'HackTheBox']
          }
        ],
        resources: [
          {
            type: 'practice',
            title: 'TryHackMe',
            url: 'https://tryhackme.com',
            free: true,
            provider: 'TryHackMe',
            rating: 4.8
          }
        ]
      },
      {
        id: 'soc-analyst',
        title: 'SOC Analyst',
        subtype: 'Threat Detection',
        description: 'Monitor security operations center and detect threats',
        difficulty: 'Intermediate',
        avgSalary: '$85K',
        skills: ['SIEM Management', 'Threat Hunting', 'Incident Response', 'Log Analysis', 'Threat Intelligence'],
        tools: ['Splunk', 'QRadar', 'ArcSight', 'Phantom', 'Carbon Black'],
        studyPlan90: [
          {
            week: 1,
            title: 'SOC Operations',
            topics: ['SIEM Basics', 'Log Analysis', 'Alert Triage'],
            projects: ['SOC Playbook Creation'],
            resources: ['SOC Analyst Training', 'SIEM Tutorials']
          }
        ],
        studyPlan120: [
          {
            week: 1,
            title: 'Advanced SOC Operations',
            topics: ['Threat Hunting', 'Advanced Analytics', 'Automation'],
            projects: ['Threat Hunting Campaign'],
            resources: ['Threat Hunting Guide', 'SOAR Platforms']
          }
        ],
        resources: [
          {
            type: 'course',
            title: 'SOC Analyst Fundamentals',
            url: 'https://cybrary.it/course/soc-analyst-fundamentals',
            free: true,
            provider: 'Cybrary',
            rating: 4.4
          }
        ]
      },
      {
        id: 'malware-analyst',
        title: 'Malware Analyst',
        subtype: 'Reverse Engineering',
        description: 'Analyze malicious software and develop countermeasures',
        difficulty: 'Advanced',
        avgSalary: '$110K',
        skills: ['Reverse Engineering', 'Assembly Language', 'Malware Analysis', 'Sandboxing', 'Threat Intelligence'],
        tools: ['IDA Pro', 'Ghidra', 'OllyDbg', 'Wireshark', 'VMware'],
        studyPlan90: [
          {
            week: 1,
            title: 'Malware Analysis Basics',
            topics: ['Static Analysis', 'Dynamic Analysis', 'Sandboxing'],
            projects: ['Basic Malware Report'],
            resources: ['Malware Analysis Course', 'Practical Malware Analysis']
          }
        ],
        studyPlan120: [
          {
            week: 1,
            title: 'Advanced Malware Analysis',
            topics: ['Advanced Evasion', 'Rootkit Analysis', 'Mobile Malware'],
            projects: ['Advanced Threat Analysis'],
            resources: ['Advanced Malware Analysis', 'Reverse Engineering Guide']
          }
        ],
        resources: [
          {
            type: 'book',
            title: 'Practical Malware Analysis',
            url: 'https://nostarch.com/malware',
            free: false,
            provider: 'No Starch Press',
            rating: 4.7
          }
        ]
      },
      {
        id: 'forensic-expert',
        title: 'Forensic Expert',
        subtype: 'Digital Forensics',
        description: 'Investigate digital crimes and recover evidence',
        difficulty: 'Advanced',
        avgSalary: '$105K',
        skills: ['Digital Forensics', 'Evidence Collection', 'Data Recovery', 'Legal Procedures', 'Report Writing'],
        tools: ['EnCase', 'FTK', 'Autopsy', 'Volatility', 'Cellebrite'],
        studyPlan90: [
          {
            week: 1,
            title: 'Digital Forensics Fundamentals',
            topics: ['Evidence Handling', 'File System Analysis', 'Network Forensics'],
            projects: ['Forensic Investigation Report'],
            resources: ['Digital Forensics Course', 'SANS Forensics']
          }
        ],
        studyPlan120: [
          {
            week: 1,
            title: 'Advanced Digital Forensics',
            topics: ['Mobile Forensics', 'Cloud Forensics', 'Memory Analysis'],
            projects: ['Complex Investigation Case'],
            resources: ['Advanced Forensics Training', 'GCFA Certification']
          }
        ],
        resources: [
          {
            type: 'certification',
            title: 'GCFA - GIAC Certified Forensic Analyst',
            url: 'https://giac.org/certification/certified-forensic-analyst-gcfa',
            free: false,
            provider: 'GIAC',
            rating: 4.6
          }
        ]
      },
      {
        id: 'grc-analyst',
        title: 'GRC Analyst',
        subtype: 'Risk & Compliance',
        description: 'Manage governance, risk, and compliance programs',
        difficulty: 'Intermediate',
        avgSalary: '$95K',
        skills: ['Risk Assessment', 'Compliance Management', 'Policy Development', 'Audit Support', 'Regulatory Knowledge'],
        tools: ['GRC Platforms', 'Risk Registers', 'Compliance Tools', 'Audit Software', 'Policy Management'],
        studyPlan90: [
          {
            week: 1,
            title: 'GRC Fundamentals',
            topics: ['Risk Management', 'Compliance Frameworks', 'Policy Development'],
            projects: ['Risk Assessment Report'],
            resources: ['GRC Training', 'CISA Study Guide']
          }
        ],
        studyPlan120: [
          {
            week: 1,
            title: 'Advanced GRC Management',
            topics: ['Enterprise Risk Management', 'Regulatory Compliance', 'Third-party Risk'],
            projects: ['Complete GRC Program'],
            resources: ['Advanced GRC Course', 'CRISC Certification']
          }
        ],
        resources: [
          {
            type: 'certification',
            title: 'CRISC - Certified in Risk and Information Systems Control',
            url: 'https://isaca.org/credentialing/crisc',
            free: false,
            provider: 'ISACA',
            rating: 4.5
          }
        ]
      }
    ]
  },
  {
    id: 'cloud-devops',
    title: 'Cloud Computing & DevOps',
    description: 'Scalable infrastructure and automation',
    icon: 'Cloud',
    color: 'from-green-500 to-teal-600',
    marketGrowth: '+22% annually',
    avgSalaryRange: '$90K - $170K',
    roles: [
      {
        id: 'cloud-engineer',
        title: 'Cloud Engineer',
        subtype: 'AWS, Azure, GCP',
        description: 'Design and manage cloud infrastructure',
        difficulty: 'Intermediate',
        avgSalary: '$110K',
        skills: ['Cloud Platforms', 'Infrastructure as Code', 'Containerization', 'Monitoring', 'Cost Optimization'],
        tools: ['AWS/Azure/GCP', 'Terraform', 'Docker', 'Kubernetes', 'CloudFormation'],
        studyPlan90: [
          {
            week: 1,
            title: 'Cloud Fundamentals',
            topics: ['Cloud Service Models', 'AWS Core Services', 'Security Basics'],
            projects: ['Deploy Web App to Cloud'],
            resources: ['AWS Documentation', 'Cloud Practitioner Course']
          }
        ],
        studyPlan120: [
          {
            week: 1,
            title: 'Advanced Cloud Architecture',
            topics: ['Multi-Region Deployment', 'Disaster Recovery', 'Cost Optimization'],
            projects: ['Highly Available Web Application'],
            resources: ['AWS Solutions Architect', 'Azure Architecture Center']
          }
        ],
        resources: [
          {
            type: 'certification',
            title: 'AWS Certified Solutions Architect',
            url: 'https://aws.amazon.com/certification/certified-solutions-architect-associate',
            free: false,
            provider: 'AWS',
            rating: 4.7
          }
        ]
      },
      {
        id: 'cloud-architect',
        title: 'Cloud Architect',
        subtype: 'Multi-cloud Design',
        description: 'Design enterprise-scale cloud solutions',
        difficulty: 'Advanced',
        avgSalary: '$140K',
        skills: ['Solution Architecture', 'Multi-cloud Strategy', 'Enterprise Integration', 'Security Architecture', 'Cost Management'],
        tools: ['AWS/Azure/GCP', 'Terraform', 'Kubernetes', 'Service Mesh', 'Monitoring Tools'],
        studyPlan90: [
          {
            week: 1,
            title: 'Cloud Architecture Principles',
            topics: ['Well-Architected Framework', 'Design Patterns', 'Scalability'],
            projects: ['Enterprise Architecture Design'],
            resources: ['AWS Well-Architected', 'Cloud Architecture Patterns']
          }
        ],
        studyPlan120: [
          {
            week: 1,
            title: 'Advanced Cloud Architecture',
            topics: ['Multi-cloud Strategy', 'Hybrid Cloud', 'Edge Computing'],
            projects: ['Multi-cloud Solution Design'],
            resources: ['Enterprise Architecture Guide', 'Multi-cloud Patterns']
          }
        ],
        resources: [
          {
            type: 'certification',
            title: 'AWS Certified Solutions Architect Professional',
            url: 'https://aws.amazon.com/certification/certified-solutions-architect-professional',
            free: false,
            provider: 'AWS',
            rating: 4.8
          }
        ]
      },
      {
        id: 'devops-engineer',
        title: 'DevOps Engineer',
        subtype: 'CI/CD & Automation',
        description: 'Automate development and deployment processes',
        difficulty: 'Advanced',
        avgSalary: '$125K',
        skills: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring', 'Container Orchestration', 'Automation'],
        tools: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'Ansible'],
        studyPlan90: [
          {
            week: 1,
            title: 'DevOps Foundations',
            topics: ['CI/CD Concepts', 'Version Control', 'Automation Basics'],
            projects: ['Basic CI/CD Pipeline'],
            resources: ['DevOps Handbook', 'Jenkins Documentation']
          }
        ],
        studyPlan120: [
          {
            week: 1,
            title: 'Advanced DevOps Practices',
            topics: ['Container Orchestration', 'Monitoring & Alerting', 'Security Integration'],
            projects: ['Complete DevOps Pipeline'],
            resources: ['Kubernetes Documentation', 'Prometheus Monitoring']
          }
        ],
        resources: [
          {
            type: 'course',
            title: 'DevOps Engineering on AWS',
            url: 'https://aws.amazon.com/training/classroom/devops-engineering-on-aws',
            free: false,
            provider: 'AWS',
            rating: 4.6
          }
        ]
      },
      {
        id: 'sre',
        title: 'Site Reliability Engineer (SRE)',
        subtype: 'Scaling & Monitoring',
        description: 'Ensure system reliability and performance at scale',
        difficulty: 'Advanced',
        avgSalary: '$135K',
        skills: ['System Reliability', 'Performance Monitoring', 'Incident Management', 'Automation', 'Capacity Planning'],
        tools: ['Prometheus', 'Grafana', 'Kubernetes', 'Terraform', 'PagerDuty'],
        studyPlan90: [
          {
            week: 1,
            title: 'SRE Fundamentals',
            topics: ['SLI/SLO/SLA', 'Error Budgets', 'Monitoring'],
            projects: ['SRE Dashboard'],
            resources: ['Google SRE Book', 'SRE Workbook']
          }
        ],
        studyPlan120: [
          {
            week: 1,
            title: 'Advanced SRE Practices',
            topics: ['Chaos Engineering', 'Capacity Planning', 'Incident Response'],
            projects: ['Complete SRE Implementation'],
            resources: ['Chaos Engineering Book', 'SRE Best Practices']
          }
        ],
        resources: [
          {
            type: 'book',
            title: 'Site Reliability Engineering',
            url: 'https://sre.google/sre-book/table-of-contents',
            free: true,
            provider: 'Google',
            rating: 4.9
          }
        ]
      },
      {
        id: 'infra-automation-engineer',
        title: 'Infrastructure Automation Engineer',
        subtype: 'IaC Tools',
        description: 'Automate infrastructure provisioning and management',
        difficulty: 'Intermediate',
        avgSalary: '$115K',
        skills: ['Infrastructure as Code', 'Configuration Management', 'Automation Scripts', 'Cloud Platforms', 'Monitoring'],
        tools: ['Terraform', 'Ansible', 'Puppet', 'Chef', 'CloudFormation'],
        studyPlan90: [
          {
            week: 1,
            title: 'Infrastructure Automation Basics',
            topics: ['IaC Principles', 'Terraform Basics', 'Configuration Management'],
            projects: ['Automated Infrastructure Setup'],
            resources: ['Terraform Documentation', 'Ansible Guide']
          }
        ],
        studyPlan120: [
          {
            week: 1,
            title: 'Advanced Infrastructure Automation',
            topics: ['Multi-cloud IaC', 'Advanced Automation', 'Compliance as Code'],
            projects: ['Enterprise IaC Solution'],
            resources: ['Advanced Terraform', 'Infrastructure Patterns']
          }
        ],
        resources: [
          {
            type: 'course',
            title: 'Infrastructure as Code with Terraform',
            url: 'https://learn.hashicorp.com/terraform',
            free: true,
            provider: 'HashiCorp',
            rating: 4.7
          }
        ]
      }
    ]
  },
  {
    id: 'ai-data-science',
    title: 'AI & Data Science',
    description: 'Machine learning and data analytics',
    icon: 'Brain',
    color: 'from-purple-500 to-pink-600',
    marketGrowth: '+25% annually',
    avgSalaryRange: '$95K - $200K',
    roles: [
      {
        id: 'data-analyst',
        title: 'Data Analyst',
        subtype: 'Dashboards & SQL',
        description: 'Analyze data to provide business insights',
        difficulty: 'Beginner',
        avgSalary: '$75K',
        skills: ['SQL', 'Excel', 'Data Visualization', 'Statistics', 'Business Intelligence'],
        tools: ['SQL', 'Tableau', 'Power BI', 'Excel', 'Python'],
        studyPlan90: [
          {
            week: 1,
            title: 'Data Analysis Fundamentals',
            topics: ['SQL Basics', 'Data Cleaning', 'Basic Statistics'],
            projects: ['Sales Data Analysis'],
            resources: ['SQL Tutorial', 'Statistics Course']
          }
        ],
        studyPlan120: [
          {
            week: 1,
            title: 'Advanced Data Analysis',
            topics: ['Advanced SQL', 'Statistical Analysis', 'Data Storytelling'],
            projects: ['Business Intelligence Dashboard'],
            resources: ['Advanced SQL Course', 'Data Visualization Guide']
          }
        ],
        resources: [
          {
            type: 'course',
            title: 'Google Data Analytics Certificate',
            url: 'https://coursera.org/professional-certificates/google-data-analytics',
            free: false,
            provider: 'Coursera',
            rating: 4.6
          }
        ]
      },
      {
        id: 'bi-developer',
        title: 'BI Developer',
        subtype: 'Data Warehousing',
        description: 'Build business intelligence solutions and data warehouses',
        difficulty: 'Intermediate',
        avgSalary: '$95K',
        skills: ['Data Warehousing', 'ETL Processes', 'OLAP', 'Reporting', 'Database Design'],
        tools: ['SQL Server', 'Tableau', 'Power BI', 'SSIS', 'Snowflake'],
        studyPlan90: [
          {
            week: 1,
            title: 'BI Fundamentals',
            topics: ['Data Warehousing Concepts', 'ETL Processes', 'OLAP vs OLTP'],
            projects: ['Data Warehouse Design'],
            resources: ['Data Warehousing Guide', 'ETL Best Practices']
          }
        ],
        studyPlan120: [
          {
            week: 1,
            title: 'Advanced BI Development',
            topics: ['Advanced ETL', 'Data Modeling', 'Performance Optimization'],
            projects: ['Enterprise BI Solution'],
            resources: ['Advanced BI Course', 'Data Modeling Patterns']
          }
        ],
        resources: [
          {
            type: 'course',
            title: 'Microsoft BI Certification',
            url: 'https://docs.microsoft.com/learn/certifications/azure-data-engineer',
            free: false,
            provider: 'Microsoft',
            rating: 4.5
          }
        ]
      },
      {
        id: 'data-engineer',
        title: 'Data Engineer',
        subtype: 'ETL Pipelines',
        description: 'Build and maintain data infrastructure and pipelines',
        difficulty: 'Intermediate',
        avgSalary: '$115K',
        skills: ['Data Pipelines', 'Big Data Technologies', 'Cloud Platforms', 'Programming', 'Database Management'],
        tools: ['Apache Spark', 'Kafka', 'Airflow', 'AWS/GCP', 'Python'],
        studyPlan90: [
          {
            week: 1,
            title: 'Data Engineering Basics',
            topics: ['Data Pipeline Design', 'ETL vs ELT', 'Big Data Concepts'],
            projects: ['Data Pipeline Implementation'],
            resources: ['Data Engineering Course', 'Apache Spark Tutorial']
          }
        ],
        studyPlan120: [
          {
            week: 1,
            title: 'Advanced Data Engineering',
            topics: ['Stream Processing', 'Data Lake Architecture', 'MLOps'],
            projects: ['Real-time Data Pipeline'],
            resources: ['Advanced Data Engineering', 'Stream Processing Guide']
          }
        ],
        resources: [
          {
            type: 'course',
            title: 'Data Engineering on Google Cloud',
            url: 'https://cloud.google.com/training/data-engineering-and-analytics',
            free: false,
            provider: 'Google Cloud',
            rating: 4.7
          }
        ]
      },
      {
        id: 'data-scientist',
        title: 'Data Scientist',
        subtype: 'Modeling & Storytelling',
        description: 'Extract insights from data using statistical methods and ML',
        difficulty: 'Advanced',
        avgSalary: '$130K',
        skills: ['Machine Learning', 'Statistics', 'Python/R', 'Data Visualization', 'Domain Expertise'],
        tools: ['Python', 'R', 'Jupyter', 'Scikit-learn', 'TensorFlow'],
        studyPlan90: [
          {
            week: 1,
            title: 'Data Science Fundamentals',
            topics: ['Statistics', 'Python for Data Science', 'Data Exploration'],
            projects: ['Predictive Model'],
            resources: ['Python Data Science Handbook', 'Statistics Course']
          }
        ],
        studyPlan120: [
          {
            week: 1,
            title: 'Advanced Data Science',
            topics: ['Advanced ML Algorithms', 'Feature Engineering', 'Model Deployment'],
            projects: ['End-to-End ML Project'],
            resources: ['Advanced ML Course', 'MLOps Guide']
          }
        ],
        resources: [
          {
            type: 'course',
            title: 'IBM Data Science Professional Certificate',
            url: 'https://coursera.org/professional-certificates/ibm-data-science',
            free: false,
            provider: 'Coursera',
            rating: 4.6
          }
        ]
      },
      {
        id: 'ml-engineer',
        title: 'ML Engineer',
        subtype: 'MLOps & Deployment',
        description: 'Deploy and maintain machine learning models in production',
        difficulty: 'Advanced',
        avgSalary: '$140K',
        skills: ['MLOps', 'Model Deployment', 'Cloud Platforms', 'DevOps', 'Software Engineering'],
        tools: ['MLflow', 'Kubeflow', 'Docker', 'Kubernetes', 'AWS SageMaker'],
        studyPlan90: [
          {
            week: 1,
            title: 'ML Engineering Basics',
            topics: ['MLOps Principles', 'Model Deployment', 'CI/CD for ML'],
            projects: ['ML Model Deployment'],
            resources: ['MLOps Course', 'Model Deployment Guide']
          }
        ],
        studyPlan120: [
          {
            week: 1,
            title: 'Advanced ML Engineering',
            topics: ['Model Monitoring', 'A/B Testing', 'Feature Stores'],
            projects: ['Production ML System'],
            resources: ['Advanced MLOps', 'ML System Design']
          }
        ],
        resources: [
          {
            type: 'course',
            title: 'Machine Learning Engineering for Production',
            url: 'https://coursera.org/specializations/machine-learning-engineering-for-production-mlops',
            free: false,
            provider: 'Coursera',
            rating: 4.7
          }
        ]
      },
      {
        id: 'deep-learning-engineer',
        title: 'Deep Learning Engineer',
        subtype: 'Neural Networks',
        description: 'Develop deep learning models and neural networks',
        difficulty: 'Advanced',
        avgSalary: '$150K',
        skills: ['Deep Learning', 'Neural Networks', 'TensorFlow/PyTorch', 'Computer Vision', 'NLP'],
        tools: ['TensorFlow', 'PyTorch', 'Keras', 'CUDA', 'OpenCV'],
        studyPlan90: [
          {
            week: 1,
            title: 'Deep Learning Fundamentals',
            topics: ['Neural Networks', 'Backpropagation', 'CNN Basics'],
            projects: ['Image Classification Model'],
            resources: ['Deep Learning Course', 'Neural Networks Guide']
          }
        ],
        studyPlan120: [
          {
            week: 1,
            title: 'Advanced Deep Learning',
            topics: ['Advanced Architectures', 'Transfer Learning', 'Model Optimization'],
            projects: ['Advanced Computer Vision Project'],
            resources: ['Advanced Deep Learning', 'Computer Vision Course']
          }
        ],
        resources: [
          {
            type: 'course',
            title: 'Deep Learning Specialization',
            url: 'https://coursera.org/specializations/deep-learning',
            free: false,
            provider: 'Coursera',
            rating: 4.9
          }
        ]
      },
      {
        id: 'nlp-engineer',
        title: 'NLP Engineer',
        subtype: 'Language Models',
        description: 'Build natural language processing applications',
        difficulty: 'Advanced',
        avgSalary: '$145K',
        skills: ['NLP', 'Transformers', 'Language Models', 'Text Processing', 'Deep Learning'],
        tools: ['spaCy', 'NLTK', 'Transformers', 'BERT', 'GPT'],
        studyPlan90: [
          {
            week: 1,
            title: 'NLP Fundamentals',
            topics: ['Text Processing', 'Language Models', 'Sentiment Analysis'],
            projects: ['Text Classification System'],
            resources: ['NLP Course', 'spaCy Documentation']
          }
        ],
        studyPlan120: [
          {
            week: 1,
            title: 'Advanced NLP',
            topics: ['Transformer Models', 'BERT/GPT', 'Question Answering'],
            projects: ['Advanced NLP Application'],
            resources: ['Transformer Course', 'Hugging Face Tutorials']
          }
        ],
        resources: [
          {
            type: 'course',
            title: 'Natural Language Processing Specialization',
            url: 'https://coursera.org/specializations/natural-language-processing',
            free: false,
            provider: 'Coursera',
            rating: 4.6
          }
        ]
      },
      {
        id: 'ai-engineer',
        title: 'AI Engineer',
        subtype: 'Product AI Integration',
        description: 'Integrate AI capabilities into products and applications',
        difficulty: 'Advanced',
        avgSalary: '$135K',
        skills: ['AI Integration', 'API Development', 'Model Deployment', 'Software Engineering', 'Product Development'],
        tools: ['Python', 'FastAPI', 'Docker', 'Cloud APIs', 'ML Frameworks'],
        studyPlan90: [
          {
            week: 1,
            title: 'AI Engineering Basics',
            topics: ['AI APIs', 'Model Integration', 'Product Development'],
            projects: ['AI-Powered Application'],
            resources: ['AI Engineering Course', 'API Development Guide']
          }
        ],
        studyPlan120: [
          {
            week: 1,
            title: 'Advanced AI Engineering',
            topics: ['Scalable AI Systems', 'Multi-model Integration', 'AI Product Strategy'],
            projects: ['Enterprise AI Solution'],
            resources: ['Advanced AI Engineering', 'AI Product Management']
          }
        ],
        resources: [
          {
            type: 'course',
            title: 'AI for Everyone',
            url: 'https://coursera.org/learn/ai-for-everyone',
            free: false,
            provider: 'Coursera',
            rating: 4.8
          }
        ]
      },
      {
        id: 'prompt-engineer',
        title: 'Prompt Engineer',
        subtype: 'LLM Tuning',
        description: 'Design and optimize prompts for large language models',
        difficulty: 'Intermediate',
        avgSalary: '$120K',
        skills: ['Prompt Design', 'LLM Understanding', 'AI Safety', 'Evaluation Methods', 'Domain Expertise'],
        tools: ['OpenAI API', 'LangChain', 'Prompt Libraries', 'Evaluation Tools', 'Fine-tuning Platforms'],
        studyPlan90: [
          {
            week: 1,
            title: 'Prompt Engineering Basics',
            topics: ['Prompt Design Principles', 'LLM Capabilities', 'Evaluation Methods'],
            projects: ['Prompt Optimization System'],
            resources: ['Prompt Engineering Guide', 'LLM Documentation']
          }
        ],
        studyPlan120: [
          {
            week: 1,
            title: 'Advanced Prompt Engineering',
            topics: ['Chain-of-Thought', 'Few-shot Learning', 'Prompt Chaining'],
            projects: ['Advanced Prompt System'],
            resources: ['Advanced Prompting Techniques', 'LLM Research Papers']
          }
        ],
        resources: [
          {
            type: 'course',
            title: 'Prompt Engineering for Developers',
            url: 'https://learn.deeplearning.ai/chatgpt-prompt-eng',
            free: true,
            provider: 'DeepLearning.AI',
            rating: 4.8
          }
        ]
      }
    ]
  },
  {
    id: 'agentic-ai',
    title: 'Agentic AI / Autonomous Systems',
    description: 'Building intelligent autonomous agents',
    icon: 'Bot',
    color: 'from-cyan-500 to-blue-600',
    marketGrowth: '+45% annually',
    avgSalaryRange: '$120K - $250K',
    roles: [
      {
        id: 'agentic-ai-architect',
        title: 'Agentic AI Architect',
        subtype: 'Agent Ecosystems',
        description: 'Design complex multi-agent systems and architectures',
        difficulty: 'Advanced',
        avgSalary: '$180K',
        skills: ['Multi-agent Systems', 'AI Architecture', 'Distributed Systems', 'Agent Communication', 'System Design'],
        tools: ['LangChain', 'AutoGen', 'CrewAI', 'Agent Frameworks', 'Orchestration Tools'],
        studyPlan90: [
          {
            week: 1,
            title: 'Agent Architecture Fundamentals',
            topics: ['Agent Design Patterns', 'Multi-agent Communication', 'Coordination Mechanisms'],
            projects: ['Multi-agent System Design'],
            resources: ['Multi-agent Systems Book', 'Agent Architecture Guide']
          }
        ],
        studyPlan120: [
          {
            week: 1,
            title: 'Advanced Agent Systems',
            topics: ['Emergent Behavior', 'Agent Learning', 'Scalable Architectures'],
            projects: ['Enterprise Agent Ecosystem'],
            resources: ['Advanced Agent Systems', 'Distributed AI Research']
          }
        ],
        resources: [
          {
            type: 'book',
            title: 'Multiagent Systems: Algorithmic, Game-Theoretic, and Logical Foundations',
            url: 'https://multiagent.org',
            free: true,
            provider: 'Cambridge University Press',
            rating: 4.7
          }
        ]
      },
      {
        id: 'cognitive-architect',
        title: 'Cognitive Architect',
        subtype: 'Knowledge Structuring',
        description: 'Design cognitive systems and knowledge representations',
        difficulty: 'Advanced',
        avgSalary: '$170K',
        skills: ['Knowledge Representation', 'Cognitive Science', 'Ontology Design', 'Reasoning Systems', 'Semantic Technologies'],
        tools: ['Knowledge Graphs', 'Ontology Editors', 'Reasoning Engines', 'Semantic Web Tools', 'Graph Databases'],
        studyPlan90: [
          {
            week: 1,
            title: 'Cognitive Architecture Basics',
            topics: ['Knowledge Representation', 'Reasoning Systems', 'Cognitive Models'],
            projects: ['Knowledge Graph System'],
            resources: ['Cognitive Architecture Guide', 'Knowledge Representation Course']
          }
        ],
        studyPlan120: [
          {
            week: 1,
            title: 'Advanced Cognitive Systems',
            topics: ['Advanced Reasoning', 'Cognitive Modeling', 'Semantic Integration'],
            projects: ['Cognitive Reasoning System'],
            resources: ['Advanced Cognitive Science', 'Semantic Web Technologies']
          }
        ],
        resources: [
          {
            type: 'course',
            title: 'Knowledge Graphs and Semantic Web',
            url: 'https://coursera.org/learn/knowledge-graphs',
            free: false,
            provider: 'Coursera',
            rating: 4.5
          }
        ]
      },
      {
        id: 'ai-assistant-developer',
        title: 'AI Assistant Developer',
        subtype: 'Conversational AI',
        description: 'Build intelligent conversational AI assistants',
        difficulty: 'Intermediate',
        avgSalary: '$125K',
        skills: ['Conversational AI', 'Dialog Management', 'NLP', 'Voice Interfaces', 'User Experience'],
        tools: ['Rasa', 'Dialogflow', 'Botframework', 'Voice APIs', 'Chat Platforms'],
        studyPlan90: [
          {
            week: 1,
            title: 'Conversational AI Basics',
            topics: ['Dialog Systems', 'Intent Recognition', 'Response Generation'],
            projects: ['Chatbot Development'],
            resources: ['Conversational AI Course', 'Rasa Documentation']
          }
        ],
        studyPlan120: [
          {
            week: 1,
            title: 'Advanced AI Assistants',
            topics: ['Multi-turn Conversations', 'Context Management', 'Personalization'],
            projects: ['Advanced AI Assistant'],
            resources: ['Advanced Dialog Systems', 'Voice Interface Design']
          }
        ],
        resources: [
          {
            type: 'course',
            title: 'Building Conversational AI',
            url: 'https://rasa.com/learning-center',
            free: true,
            provider: 'Rasa',
            rating: 4.6
          }
        ]
      }
    ]
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    description: 'iOS and Android application development',
    icon: 'Smartphone',
    color: 'from-indigo-500 to-blue-600',
    marketGrowth: '+19% annually',
    avgSalaryRange: '$75K - $140K',
    roles: [
      {
        id: 'android-developer',
        title: 'Android Developer',
        subtype: 'Kotlin, Native Android',
        description: 'Build native Android applications',
        difficulty: 'Intermediate',
        avgSalary: '$95K',
        skills: ['Kotlin', 'Android SDK', 'Material Design', 'Room Database', 'Jetpack Compose'],
        tools: ['Android Studio', 'Kotlin', 'Gradle', 'Firebase', 'Git'],
        studyPlan90: [
          {
            week: 1,
            title: 'Android Development Basics',
            topics: ['Kotlin Fundamentals', 'Android Components', 'UI Development'],
            projects: ['Simple Android App'],
            resources: ['Android Developer Guide', 'Kotlin Documentation']
          }
        ],
        studyPlan120: [
          {
            week: 1,
            title: 'Advanced Android Development',
            topics: ['Jetpack Compose', 'Architecture Patterns', 'Performance Optimization'],
            projects: ['Advanced Android Application'],
            resources: ['Advanced Android Course', 'Jetpack Compose Guide']
          }
        ],
        resources: [
          {
            type: 'course',
            title: 'Android Developer Nanodegree',
            url: 'https://udacity.com/course/android-developer-nanodegree',
            free: false,
            provider: 'Udacity',
            rating: 4.5
          }
        ]
      },
      {
        id: 'ios-developer',
        title: 'iOS Developer',
        subtype: 'Swift, Native iOS',
        description: 'Build native iOS applications',
        difficulty: 'Intermediate',
        avgSalary: '$105K',
        skills: ['Swift', 'iOS SDK', 'UIKit', 'SwiftUI', 'Core Data'],
        tools: ['Xcode', 'Swift', 'CocoaPods', 'TestFlight', 'Git'],
        studyPlan90: [
          {
            week: 1,
            title: 'iOS Development Basics',
            topics: ['Swift Fundamentals', 'iOS Components', 'Interface Builder'],
            projects: ['Simple iOS App'],
            resources: ['iOS Developer Guide', 'Swift Documentation']
          }
        ],
        studyPlan120: [
          {
            week: 1,
            title: 'Advanced iOS Development',
            topics: ['SwiftUI', 'Combine Framework', 'App Store Optimization'],
            projects: ['Advanced iOS Application'],
            resources: ['Advanced iOS Course', 'SwiftUI Tutorials']
          }
        ],
        resources: [
          {
            type: 'course',
            title: 'iOS Developer Program',
            url: 'https://developer.apple.com/programs',
            free: false,
            provider: 'Apple',
            rating: 4.7
          }
        ]
      },
      {
        id: 'flutter-developer',
        title: 'Flutter Developer',
        subtype: 'Cross-Platform',
        description: 'Build cross-platform mobile apps with Flutter',
        difficulty: 'Intermediate',
        avgSalary: '$90K',
        skills: ['Dart', 'Flutter Framework', 'State Management', 'Firebase', 'Platform Integration'],
        tools: ['Flutter SDK', 'Dart', 'Android Studio', 'VS Code', 'Firebase'],
        studyPlan90: [
          {
            week: 1,
            title: 'Flutter Development Basics',
            topics: ['Dart Language', 'Flutter Widgets', 'State Management'],
            projects: ['Cross-platform Mobile App'],
            resources: ['Flutter Documentation', 'Dart Language Tour']
          }
        ],
        studyPlan120: [
          {
            week: 1,
            title: 'Advanced Flutter Development',
            topics: ['Advanced State Management', 'Platform Channels', 'Performance Optimization'],
            projects: ['Advanced Flutter Application'],
            resources: ['Advanced Flutter Course', 'Flutter Performance Guide']
          }
        ],
        resources: [
          {
            type: 'course',
            title: 'Flutter Development Bootcamp',
            url: 'https://udemy.com/course/flutter-bootcamp-with-dart',
            free: false,
            provider: 'Udemy',
            rating: 4.6
          }
        ]
      },
      {
        id: 'react-native-developer',
        title: 'React Native Developer',
        subtype: 'JS-based Mobile Apps',
        description: 'Build mobile apps using React Native',
        difficulty: 'Intermediate',
        avgSalary: '$85K',
        skills: ['React Native', 'JavaScript', 'Redux', 'Native Modules', 'Mobile UI/UX'],
        tools: ['React Native CLI', 'Expo', 'Metro', 'Flipper', 'Git'],
        studyPlan90: [
          {
            week: 1,
            title: 'React Native Basics',
            topics: ['React Native Components', 'Navigation', 'State Management'],
            projects: ['Mobile App with React Native'],
            resources: ['React Native Documentation', 'React Native Tutorial']
          }
        ],
        studyPlan120: [
          {
            week: 1,
            title: 'Advanced React Native',
            topics: ['Native Modules', 'Performance Optimization', 'App Store Deployment'],
            projects: ['Production React Native App'],
            resources: ['Advanced React Native', 'Performance Optimization Guide']
          }
        ],
        resources: [
          {
            type: 'course',
            title: 'React Native - The Practical Guide',
            url: 'https://udemy.com/course/react-native-the-practical-guide',
            free: false,
            provider: 'Udemy',
            rating: 4.6
          }
        ]
      }
    ]
  },
  {
    id: 'qa-testing',
    title: 'QA / Testing',
    description: 'Quality assurance and software testing',
    icon: 'TestTube',
    color: 'from-yellow-500 to-orange-600',
    marketGrowth: '+9% annually',
    avgSalaryRange: '$55K - $110K',
    roles: [
      {
        id: 'manual-tester',
        title: 'Manual Tester',
        subtype: 'Exploratory Testing',
        description: 'Perform manual testing and quality assurance',
        difficulty: 'Beginner',
        avgSalary: '$65K',
        skills: ['Test Case Design', 'Bug Reporting', 'Test Planning', 'Exploratory Testing', 'Domain Knowledge'],
        tools: ['JIRA', 'TestRail', 'Bugzilla', 'Postman', 'Browser DevTools'],
        studyPlan90: [
          {
            week: 1,
            title: 'Manual Testing Fundamentals',
            topics: ['Testing Principles', 'Test Case Design', 'Bug Life Cycle'],
            projects: ['Test Plan Creation'],
            resources: ['ISTQB Foundation', 'Testing Fundamentals']
          }
        ],
        studyPlan120: [
          {
            week: 1,
            title: 'Advanced Manual Testing',
            topics: ['Exploratory Testing', 'Usability Testing', 'Mobile Testing'],
            projects: ['Comprehensive Test Suite'],
            resources: ['Advanced Testing Techniques', 'Exploratory Testing Guide']
          }
        ],
        resources: [
          {
            type: 'certification',
            title: 'ISTQB Foundation Level',
            url: 'https://istqb.org/certification-path-root/foundation-level',
            free: false,
            provider: 'ISTQB',
            rating: 4.4
          }
        ]
      },
      {
        id: 'automation-tester',
        title: 'Automation Tester',
        subtype: 'Selenium, API',
        description: 'Develop and maintain automated test suites',
        difficulty: 'Intermediate',
        avgSalary: '$85K',
        skills: ['Test Automation', 'Selenium', 'API Testing', 'Programming', 'CI/CD Integration'],
        tools: ['Selenium', 'TestNG', 'Postman', 'Jenkins', 'Git'],
        studyPlan90: [
          {
            week: 1,
            title: 'Test Automation Basics',
            topics: ['Selenium WebDriver', 'Test Frameworks', 'Page Object Model'],
            projects: ['Automated Test Suite'],
            resources: ['Selenium Documentation', 'Test Automation Course']
          }
        ],
        studyPlan120: [
          {
            week: 1,
            title: 'Advanced Test Automation',
            topics: ['API Testing', 'Mobile Automation', 'CI/CD Integration'],
            projects: ['Complete Automation Framework'],
            resources: ['Advanced Automation', 'API Testing Guide']
          }
        ],
        resources: [
          {
            type: 'course',
            title: 'Selenium WebDriver with Java',
            url: 'https://udemy.com/course/selenium-real-time-examplesinterview-questions',
            free: false,
            provider: 'Udemy',
            rating: 4.5
          }
        ]
      },
      {
        id: 'performance-tester',
        title: 'Performance Tester',
        subtype: 'Load Testing',
        description: 'Test application performance and scalability',
        difficulty: 'Intermediate',
        avgSalary: '$95K',
        skills: ['Performance Testing', 'Load Testing', 'Stress Testing', 'Monitoring', 'Analysis'],
        tools: ['JMeter', 'LoadRunner', 'Gatling', 'New Relic', 'AppDynamics'],
        studyPlan90: [
          {
            week: 1,
            title: 'Performance Testing Basics',
            topics: ['Performance Testing Types', 'JMeter Basics', 'Test Planning'],
            projects: ['Load Testing Script'],
            resources: ['JMeter Documentation', 'Performance Testing Guide']
          }
        ],
        studyPlan120: [
          {
            week: 1,
            title: 'Advanced Performance Testing',
            topics: ['Advanced Scripting', 'Performance Monitoring', 'Bottleneck Analysis'],
            projects: ['Complete Performance Test Suite'],
            resources: ['Advanced Performance Testing', 'Monitoring Tools Guide']
          }
        ],
        resources: [
          {
            type: 'course',
            title: 'Performance Testing with JMeter',
            url: 'https://udemy.com/course/learn-jmeter-from-scratch-performance-load-testing-tool',
            free: false,
            provider: 'Udemy',
            rating: 4.4
          }
        ]
      },
      {
        id: 'qa-analyst',
        title: 'QA Analyst',
        subtype: 'Process Testing',
        description: 'Analyze and improve quality assurance processes',
        difficulty: 'Intermediate',
        avgSalary: '$80K',
        skills: ['Process Analysis', 'Quality Metrics', 'Test Strategy', 'Risk Assessment', 'Continuous Improvement'],
        tools: ['Quality Management Tools', 'Metrics Dashboards', 'Process Mapping', 'Risk Assessment Tools', 'Reporting Tools'],
        studyPlan90: [
          {
            week: 1,
            title: 'QA Analysis Fundamentals',
            topics: ['Quality Processes', 'Metrics and KPIs', 'Risk Assessment'],
            projects: ['QA Process Improvement Plan'],
            resources: ['Quality Management Guide', 'QA Best Practices']
          }
        ],
        studyPlan120: [
          {
            week: 1,
            title: 'Advanced QA Analysis',
            topics: ['Advanced Quality Metrics', 'Process Optimization', 'Quality Audits'],
            projects: ['Complete QA Strategy'],
            resources: ['Advanced Quality Management', 'Six Sigma for QA']
          }
        ],
        resources: [
          {
            type: 'certification',
            title: 'Certified Quality Analyst (CQA)',
            url: 'https://asq.org/cert/quality-analyst',
            free: false,
            provider: 'ASQ',
            rating: 4.3
          }
        ]
      }
    ]
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX & Product Design',
    description: 'User experience and interface design',
    icon: 'Palette',
    color: 'from-pink-500 to-rose-600',
    marketGrowth: '+8% annually',
    avgSalaryRange: '$70K - $130K',
    roles: [
      {
        id: 'ui-designer',
        title: 'UI Designer',
        subtype: 'Layout & Visual Design',
        description: 'Create visually appealing user interfaces',
        difficulty: 'Beginner',
        avgSalary: '$75K',
        skills: ['Visual Design', 'Typography', 'Color Theory', 'Layout Design', 'Design Systems'],
        tools: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator'],
        studyPlan90: [
          {
            week: 1,
            title: 'UI Design Fundamentals',
            topics: ['Design Principles', 'Typography', 'Color Theory'],
            projects: ['Mobile App UI Design'],
            resources: ['UI Design Course', 'Design Principles Guide']
          }
        ],
        studyPlan120: [
          {
            week: 1,
            title: 'Advanced UI Design',
            topics: ['Design Systems', 'Advanced Typography', 'Micro-interactions'],
            projects: ['Complete Design System'],
            resources: ['Advanced UI Design', 'Design Systems Guide']
          }
        ],
        resources: [
          {
            type: 'course',
            title: 'UI Design Fundamentals',
            url: 'https://designcode.io/ui-design',
            free: false,
            provider: 'Design+Code',
            rating: 4.7
          }
        ]
      },
      {
        id: 'ux-designer',
        title: 'UX Designer',
        subtype: 'Wireframes & Research',
        description: 'Research and design user experiences',
        difficulty: 'Intermediate',
        avgSalary: '$85K',
        skills: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing', 'Information Architecture'],
        tools: ['Figma', 'Miro', 'UserTesting', 'Hotjar', 'Optimal Workshop'],
        studyPlan90: [
          {
            week: 1,
            title: 'UX Design Fundamentals',
            topics: ['User Research Methods', 'Wireframing', 'User Journey Mapping'],
            projects: ['UX Research Project'],
            resources: ['UX Design Course', 'User Research Guide']
          }
        ],
        studyPlan120: [
          {
            week: 1,
            title: 'Advanced UX Design',
            topics: ['Advanced Research Methods', 'Service Design', 'Design Strategy'],
            projects: ['Complete UX Strategy'],
            resources: ['Advanced UX Design', 'Service Design Thinking']
          }
        ],
        resources: [
          {
            type: 'course',
            title: 'Google UX Design Certificate',
            url: 'https://coursera.org/professional-certificates/google-ux-design',
            free: false,
            provider: 'Coursera',
            rating: 4.8
          }
        ]
      },
      {
        id: 'product-designer',
        title: 'Product Designer',
        subtype: 'End-to-End Product',
        description: 'Design complete product experiences from concept to launch',
        difficulty: 'Advanced',
        avgSalary: '$110K',
        skills: ['Product Strategy', 'Design Thinking', 'User Research', 'Prototyping', 'Business Understanding'],
        tools: ['Figma', 'Principle', 'Framer', 'Miro', 'Analytics Tools'],
        studyPlan90: [
          {
            week: 1,
            title: 'Product Design Fundamentals',
            topics: ['Design Thinking', 'Product Strategy', 'User-Centered Design'],
            projects: ['Product Design Case Study'],
            resources: ['Product Design Course', 'Design Thinking Guide']
          }
        ],
        studyPlan120: [
          {
            week: 1,
            title: 'Advanced Product Design',
            topics: ['Advanced Prototyping', 'Design Leadership', 'Business Strategy'],
            projects: ['Complete Product Redesign'],
            resources: ['Advanced Product Design', 'Design Leadership Guide']
          }
        ],
        resources: [
          {
            type: 'course',
            title: 'Product Design Course',
            url: 'https://designlab.com/ux-ui-design-course',
            free: false,
            provider: 'Designlab',
            rating: 4.6
          }
        ]
      }
    ]
  },
  {
    id: 'sap-erp',
    title: 'SAP (ERP)',
    description: 'Enterprise resource planning systems',
    icon: 'Building2',
    color: 'from-blue-600 to-indigo-700',
    marketGrowth: '+7% annually',
    avgSalaryRange: '$80K - $150K',
    roles: [
      {
        id: 'sap-functional-consultant',
        title: 'SAP Functional Consultant',
        subtype: 'FICO, MM, SD, HR',
        description: 'Configure and implement SAP functional modules',
        difficulty: 'Intermediate',
        avgSalary: '$95K',
        skills: ['SAP Modules', 'Business Process Analysis', 'Configuration', 'User Training', 'Project Management'],
        tools: ['SAP GUI', 'SAP Fiori', 'Solution Manager', 'Transport Management', 'ASAP Methodology'],
        studyPlan90: [
          {
            week: 1,
            title: 'SAP Fundamentals',
            topics: ['SAP Architecture', 'Navigation', 'Basic Configuration'],
            projects: ['SAP Module Configuration'],
            resources: ['SAP Learning Hub', 'SAP Documentation']
          }
        ],
        studyPlan120: [
          {
            week: 1,
            title: 'Advanced SAP Configuration',
            topics: ['Advanced Configuration', 'Integration', 'Customization'],
            projects: ['End-to-End SAP Implementation'],
            resources: ['Advanced SAP Course', 'SAP Best Practices']
          }
        ],
        resources: [
          {
            type: 'course',
            title: 'SAP FICO Training',
            url: 'https://training.sap.com/course/fi50-sap-erp-financials',
            free: false,
            provider: 'SAP',
            rating: 4.5
          }
        ]
      },
      {
        id: 'sap-abap-developer',
        title: 'SAP ABAP Developer',
        subtype: 'Custom Development',
        description: 'Develop custom SAP applications and enhancements',
        difficulty: 'Advanced',
        avgSalary: '$105K',
        skills: ['ABAP Programming', 'SAP Development', 'Object-Oriented Programming', 'Performance Optimization', 'Debugging'],
        tools: ['SAP NetWeaver', 'ABAP Workbench', 'Eclipse ADT', 'Transport Organizer', 'Code Inspector'],
        studyPlan90: [
          {
            week: 1,
            title: 'ABAP Programming Basics',
            topics: ['ABAP Syntax', 'Data Dictionary', 'Reports and Forms'],
            projects: ['Custom ABAP Report'],
            resources: ['ABAP Programming Guide', 'SAP ABAP Documentation']
          }
        ],
        studyPlan120: [
          {
            week: 1,
            title: 'Advanced ABAP Development',
            topics: ['Object-Oriented ABAP', 'Web Dynpro', 'Enhancement Framework'],
            projects: ['Complex ABAP Application'],
            resources: ['Advanced ABAP Course', 'ABAP Objects Guide']
          }
        ],
        resources: [
          {
            type: 'course',
            title: 'SAP ABAP Programming',
            url: 'https://training.sap.com/course/bc400-abap-workbench-foundations',
            free: false,
            provider: 'SAP',
            rating: 4.6
          }
        ]
      },
      {
        id: 'sap-basis-admin',
        title: 'SAP BASIS Admin',
        subtype: 'System Admin',
        description: 'Administer SAP system infrastructure and operations',
        difficulty: 'Advanced',
        avgSalary: '$110K',
        skills: ['System Administration', 'Database Management', 'Performance Tuning', 'Security', 'Backup & Recovery'],
        tools: ['SAP NetWeaver', 'Database Tools', 'Monitoring Tools', 'Transport Management', 'Solution Manager'],
        studyPlan90: [
          {
            week: 1,
            title: 'SAP BASIS Fundamentals',
            topics: ['System Architecture', 'Installation', 'User Administration'],
            projects: ['SAP System Setup'],
            resources: ['BASIS Administration Guide', 'SAP Installation Guide']
          }
        ],
        studyPlan120: [
          {
            week: 1,
            title: 'Advanced BASIS Administration',
            topics: ['Performance Tuning', 'High Availability', 'Disaster Recovery'],
            projects: ['Enterprise SAP Landscape'],
            resources: ['Advanced BASIS Course', 'SAP Performance Guide']
          }
        ],
        resources: [
          {
            type: 'course',
            title: 'SAP NetWeaver Administration',
            url: 'https://training.sap.com/course/adm100-sap-system-administration',
            free: false,
            provider: 'SAP',
            rating: 4.4
          }
        ]
      },
      {
        id: 'sap-bw-bi-analyst',
        title: 'SAP BW/BI Analyst',
        subtype: 'Reporting/Analytics',
        description: 'Design and develop SAP business intelligence solutions',
        difficulty: 'Intermediate',
        avgSalary: '$90K',
        skills: ['Data Warehousing', 'ETL Processes', 'Reporting', 'Analytics', 'Data Modeling'],
        tools: ['SAP BW', 'SAP BusinessObjects', 'SAP Analytics Cloud', 'Crystal Reports', 'Lumira'],
        studyPlan90: [
          {
            week: 1,
            title: 'SAP BW/BI Fundamentals',
            topics: ['Data Warehousing Concepts', 'InfoObjects', 'DataSources'],
            projects: ['BW Data Model'],
            resources: ['SAP BW Guide', 'Data Warehousing Course']
          }
        ],
        studyPlan120: [
          {
            week: 1,
            title: 'Advanced SAP BI',
            topics: ['Advanced Modeling', 'Performance Optimization', 'Analytics'],
            projects: ['Complete BI Solution'],
            resources: ['Advanced BW Course', 'SAP Analytics Guide']
          }
        ],
        resources: [
          {
            type: 'course',
            title: 'SAP BW/4HANA Training',
            url: 'https://training.sap.com/course/bw305-bw4hana-modeling',
            free: false,
            provider: 'SAP',
            rating: 4.5
          }
        ]
      },
      {
        id: 'sap-security-consultant',
        title: 'SAP Security Consultant',
        subtype: 'Access Management',
        description: 'Implement and maintain SAP security and access controls',
        difficulty: 'Advanced',
        avgSalary: '$115K',
        skills: ['SAP Security', 'Role Design', 'Authorization Concepts', 'GRC', 'Compliance'],
        tools: ['SAP GRC', 'Role Management', 'SU01/PFCG', 'Security Tools', 'Audit Tools'],
        studyPlan90: [
          {
            week: 1,
            title: 'SAP Security Fundamentals',
            topics: ['Authorization Concepts', 'Role Design', 'User Management'],
            projects: ['Security Role Design'],
            resources: ['SAP Security Guide', 'Authorization Concepts']
          }
        ],
        studyPlan120: [
          {
            week: 1,
            title: 'Advanced SAP Security',
            topics: ['GRC Implementation', 'Segregation of Duties', 'Security Auditing'],
            projects: ['Complete Security Framework'],
            resources: ['Advanced Security Course', 'GRC Implementation Guide']
          }
        ],
        resources: [
          {
            type: 'course',
            title: 'SAP Security and Authorizations',
            url: 'https://training.sap.com/course/adm940-sap-authorization-concept',
            free: false,
            provider: 'SAP',
            rating: 4.6
          }
        ]
      }
    ]
  },
  {
    id: 'salesforce',
    title: 'Salesforce',
    description: 'Customer relationship management platform',
    icon: 'Users',
    color: 'from-blue-400 to-cyan-500',
    marketGrowth: '+11% annually',
    avgSalaryRange: '$75K - $140K',
    roles: [
      {
        id: 'salesforce-admin',
        title: 'Salesforce Admin',
        subtype: 'CRM Configuration',
        description: 'Configure and maintain Salesforce CRM systems',
        difficulty: 'Beginner',
        avgSalary: '$80K',
        skills: ['Salesforce Configuration', 'User Management', 'Data Management', 'Workflow Automation', 'Reporting'],
        tools: ['Salesforce Setup', 'Process Builder', 'Flow Builder', 'Data Loader', 'Workbench'],
        studyPlan90: [
          {
            week: 1,
            title: 'Salesforce Admin Basics',
            topics: ['Salesforce Fundamentals', 'User Setup', 'Data Model'],
            projects: ['Basic Salesforce Configuration'],
            resources: ['Trailhead Admin Trail', 'Salesforce Help Documentation']
          }
        ],
        studyPlan120: [
          {
            week: 1,
            title: 'Advanced Salesforce Administration',
            topics: ['Advanced Automation', 'Security Model', 'Data Management'],
            projects: ['Complete Salesforce Implementation'],
            resources: ['Advanced Admin Course', 'Salesforce Best Practices']
          }
        ],
        resources: [
          {
            type: 'course',
            title: 'Salesforce Administrator Certification',
            url: 'https://trailhead.salesforce.com/credentials/administrator',
            free: true,
            provider: 'Salesforce',
            rating: 4.8
          }
        ]
      },
      {
        id: 'salesforce-developer',
        title: 'Salesforce Developer',
        subtype: 'Apex, LWC',
        description: 'Develop custom Salesforce applications and integrations',
        difficulty: 'Intermediate',
        avgSalary: '$105K',
        skills: ['Apex Programming', 'Lightning Web Components', 'Visualforce', 'Integration', 'Testing'],
        tools: ['VS Code', 'Salesforce CLI', 'Developer Console', 'Workbench', 'Postman'],
        studyPlan90: [
          {
            week: 1,
            title: 'Salesforce Development Basics',
            topics: ['Apex Fundamentals', 'Triggers', 'SOQL/SOSL'],
            projects: ['Custom Apex Application'],
            resources: ['Apex Developer Guide', 'Trailhead Developer Trail']
          }
        ],
        studyPlan120: [
          {
            week: 1,
            title: 'Advanced Salesforce Development',
            topics: ['Lightning Web Components', 'Integration Patterns', 'Testing Framework'],
            projects: ['Complete Lightning Application'],
            resources: ['Advanced Developer Course', 'Lightning Component Guide']
          }
        ],
        resources: [
          {
            type: 'course',
            title: 'Platform Developer I Certification',
            url: 'https://trailhead.salesforce.com/credentials/platformdeveloperi',
            free: true,
            provider: 'Salesforce',
            rating: 4.7
          }
        ]
      },
      {
        id: 'salesforce-consultant',
        title: 'Salesforce Consultant',
        subtype: 'Requirement Analysis',
        description: 'Analyze business requirements and design Salesforce solutions',
        difficulty: 'Intermediate',
        avgSalary: '$95K',
        skills: ['Business Analysis', 'Solution Design', 'Project Management', 'Change Management', 'Training'],
        tools: ['Salesforce Platform', 'Process Mapping Tools', 'Project Management Tools', 'Documentation Tools', 'Training Materials'],
        studyPlan90: [
          {
            week: 1,
            title: 'Salesforce Consulting Basics',
            topics: ['Business Analysis', 'Solution Design', 'Implementation Planning'],
            projects: ['Salesforce Implementation Plan'],
            resources: ['Consulting Methodology', 'Business Analysis Guide']
          }
        ],
        studyPlan120: [
          {
            week: 1,
            title: 'Advanced Salesforce Consulting',
            topics: ['Complex Solution Design', 'Change Management', 'Training Delivery'],
            projects: ['Enterprise Salesforce Strategy'],
            resources: ['Advanced Consulting Course', 'Change Management Guide']
          }
        ],
        resources: [
          {
            type: 'course',
            title: 'Salesforce Consultant Certification',
            url: 'https://trailhead.salesforce.com/credentials/salescloudconsultant',
            free: true,
            provider: 'Salesforce',
            rating: 4.6
          }
        ]
      },
      {
        id: 'salesforce-architect',
        title: 'Salesforce Architect',
        subtype: 'System Design',
        description: 'Design enterprise-scale Salesforce architectures',
        difficulty: 'Advanced',
        avgSalary: '$140K',
        skills: ['Solution Architecture', 'Technical Leadership', 'Integration Architecture', 'Data Architecture', 'Security Design'],
        tools: ['Salesforce Platform', 'Architecture Tools', 'Integration Platforms', 'Documentation Tools', 'Modeling Tools'],
        studyPlan90: [
          {
            week: 1,
            title: 'Salesforce Architecture Basics',
            topics: ['Architecture Principles', 'Platform Capabilities', 'Integration Patterns'],
            projects: ['Architecture Design Document'],
            resources: ['Architecture Guide', 'Integration Patterns']
          }
        ],
        studyPlan120: [
          {
            week: 1,
            title: 'Advanced Salesforce Architecture',
            topics: ['Enterprise Architecture', 'Multi-org Strategy', 'Governance'],
            projects: ['Enterprise Architecture Design'],
            resources: ['Advanced Architecture Course', 'Enterprise Patterns']
          }
        ],
        resources: [
          {
            type: 'course',
            title: 'Technical Architect Certification',
            url: 'https://trailhead.salesforce.com/credentials/technicalarchitect',
            free: true,
            provider: 'Salesforce',
            rating: 4.8
          }
        ]
      }
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Online marketing and growth strategies',
    icon: 'TrendingUp',
    color: 'from-green-400 to-emerald-600',
    marketGrowth: '+10% annually',
    avgSalaryRange: '$50K - $100K',
    roles: [
      {
        id: 'seo-specialist',
        title: 'SEO Specialist',
        subtype: 'Search Optimization',
        description: 'Optimize websites for search engine visibility',
        difficulty: 'Beginner',
        avgSalary: '$65K',
        skills: ['Keyword Research', 'On-page SEO', 'Technical SEO', 'Link Building', 'Analytics'],
        tools: ['Google Analytics', 'Search Console', 'SEMrush', 'Ahrefs', 'Screaming Frog'],
        studyPlan90: [
          {
            week: 1,
            title: 'SEO Fundamentals',
            topics: ['Search Engine Basics', 'Keyword Research', 'On-page Optimization'],
            projects: ['Website SEO Audit'],
            resources: ['Google SEO Guide', 'Moz Beginner Guide']
          }
        ],
        studyPlan120: [
          {
            week: 1,
            title: 'Advanced SEO',
            topics: ['Technical SEO', 'Advanced Link Building', 'Local SEO'],
            projects: ['Complete SEO Strategy'],
            resources: ['Advanced SEO Course', 'Technical SEO Guide']
          }
        ],
        resources: [
          {
            type: 'course',
            title: 'Google SEO Fundamentals',
            url: 'https://developers.google.com/search/docs/beginner/seo-starter-guide',
            free: true,
            provider: 'Google',
            rating: 4.7
          }
        ]
      },
      {
        id: 'ppc-manager',
        title: 'PPC Manager',
        subtype: 'Ad Campaigns',
        description: 'Manage pay-per-click advertising campaigns',
        difficulty: 'Intermediate',
        avgSalary: '$70K',
        skills: ['Google Ads', 'Facebook Ads', 'Campaign Management', 'Bid Management', 'Conversion Tracking'],
        tools: ['Google Ads', 'Facebook Ads Manager', 'Microsoft Advertising', 'Google Analytics', 'Conversion Tracking'],
        studyPlan90: [
          {
            week: 1,
            title: 'PPC Fundamentals',
            topics: ['PPC Basics', 'Google Ads Setup', 'Keyword Strategy'],
            projects: ['Google Ads Campaign'],
            resources: ['Google Ads Help', 'PPC Course']
          }
        ],
        studyPlan120: [
          {
            week: 1,
            title: 'Advanced PPC Management',
            topics: ['Advanced Bidding', 'Multi-platform Campaigns', 'Attribution Modeling'],
            projects: ['Multi-channel PPC Strategy'],
            resources: ['Advanced PPC Course', 'Attribution Guide']
          }
        ],
        resources: [
          {
            type: 'certification',
            title: 'Google Ads Certification',
            url: 'https://skillshop.exceedlms.com/student/catalog/list?category_ids=53-google-ads-certifications',
            free: true,
            provider: 'Google',
            rating: 4.6
          }
        ]
      },
      {
        id: 'content-strategist',
        title: 'Content Strategist',
        subtype: 'SEO & Content Planning',
        description: 'Develop content strategies for digital marketing',
        difficulty: 'Intermediate',
        avgSalary: '$75K',
        skills: ['Content Strategy', 'Content Marketing', 'SEO Writing', 'Editorial Planning', 'Analytics'],
        tools: ['Content Management Systems', 'Editorial Calendars', 'SEO Tools', 'Analytics Tools', 'Social Media Tools'],
        studyPlan90: [
          {
            week: 1,
            title: 'Content Strategy Basics',
            topics: ['Content Planning', 'Audience Research', 'Content Types'],
            projects: ['Content Strategy Document'],
            resources: ['Content Strategy Guide', 'Content Marketing Course']
          }
        ],
        studyPlan120: [
          {
            week: 1,
            title: 'Advanced Content Strategy',
            topics: ['Advanced Content Planning', 'Content Performance', 'Multi-channel Strategy'],
            projects: ['Comprehensive Content Strategy'],
            resources: ['Advanced Content Course', 'Content Performance Guide']
          }
        ],
        resources: [
          {
            type: 'course',
            title: 'Content Marketing Certification',
            url: 'https://academy.hubspot.com/courses/content-marketing',
            free: true,
            provider: 'HubSpot',
            rating: 4.5
          }
        ]
      },
      {
        id: 'social-media-manager',
        title: 'Social Media Manager',
        subtype: 'Engagement & Branding',
        description: 'Manage social media presence and engagement',
        difficulty: 'Beginner',
        avgSalary: '$60K',
        skills: ['Social Media Strategy', 'Content Creation', 'Community Management', 'Social Analytics', 'Brand Management'],
        tools: ['Hootsuite', 'Buffer', 'Sprout Social', 'Canva', 'Social Media Analytics'],
        studyPlan90: [
          {
            week: 1,
            title: 'Social Media Basics',
            topics: ['Platform Strategies', 'Content Creation', 'Engagement Tactics'],
            projects: ['Social Media Campaign'],
            resources: ['Social Media Guide', 'Platform Best Practices']
          }
        ],
        studyPlan120: [
          {
            week: 1,
            title: 'Advanced Social Media Management',
            topics: ['Advanced Analytics', 'Influencer Marketing', 'Crisis Management'],
            projects: ['Complete Social Media Strategy'],
            resources: ['Advanced Social Media Course', 'Crisis Management Guide']
          }
        ],
        resources: [
          {
            type: 'course',
            title: 'Social Media Marketing Certification',
            url: 'https://academy.hubspot.com/courses/social-media-marketing',
            free: true,
            provider: 'HubSpot',
            rating: 4.4
          }
        ]
      }
    ]
  }
];