<template>
  <section id="skill">
    <div class="container">
      <div class="section-title" data-aos="fade-up">
        <h2>My Skills</h2>
        <p>What I can do for your project</p>
      </div>
      <!-- Skills Overview Cards -->
      <div class="row g-4 mb-5">
        <div class="col-lg-3 col-md-6" v-for="(category, index) in skillCategories" :key="'cat-' + index"
          data-aos="fade-up" data-aos-delay="100">
          <div class="card h-100 border-0 shadow-sm rounded-3 position-relative overflow-hidden bg-body-tertiary">
            <div class="card-body p-4">
              <div class="d-flex align-items-center mb-3">
                <div
                  class="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3"
                  style="width: 50px; height: 50px;">
                  <i :class="category.icon + ' text-primary fs-4'"></i>
                </div>
                <h5 class="fw-normal mb-0 text-body">{{ category.title }}</h5>
              </div>
              <p class="text-body-secondary small">{{ category.description }}</p>
            </div>
            <div class="card-footer bg-body-secondary border-0 pb-3">
              <span class="badge bg-primary-subtle text-primary-emphasis fw-semibold me-2 mb-2"
                v-for="(tech, i) in category.technologies" :key="i">
                {{ tech }}
              </span>
            </div>
            <div class="position-absolute top-0 end-0 p-2">
              <span class="badge bg-primary bg-opacity-10 text-primary rounded-pill fw-semibold px-3">{{ category.experience }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Programming Languages Section -->
      <h3 class="mb-4 border-bottom pb-2 mt-5" data-aos="fade-up" data-aos-duration="1000">Programming Languages Level</h3>
      <div class="row">
        <div class="col-lg-6 mb-4" v-for="(language, index) in programmingLanguages" :key="index" data-aos="fade-up"
          data-aos-duration="800" :data-aos-delay="index * 100">
          <div class="card border-0 shadow-sm h-100 bg-body-secondary">
            <div class="card-body p-4">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <div class="d-flex align-items-center">
                  <i :class="language.icon + ' text-primary me-3 fs-4'"></i>
                  <h5 class="mb-0 text-body fw-normal">{{ language.name }}</h5>
                </div>
                <span class="badge bg-primary bg-opacity-10 text-primary fw-semibold">{{ language.percentage }}%</span>
              </div>
              <div class="progress bg-body-secondary" style="height: 8px;">
                <div class="progress-bar bg-primary" role="progressbar" :style="`width: ${language.percentage}%`"
                  :aria-valuenow="language.percentage" aria-valuemin="0" aria-valuemax="100" data-aos="slide-right"
                  data-aos-delay="300" data-aos-anchor-placement="top-bottom">
                </div>
              </div>
              <p class="text-body-secondary small mt-2">{{ language.description }}</p>
              <div class="mt-3">
                <span class="badge bg-secondary-subtle text-secondary-emphasis me-2 mb-2 fw-semibold"
                  v-for="(project, i) in language.projects" :key="i">
                  {{ project }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Frameworks & Tools Carousel -->
      <h3 class="mb-4 border-bottom pb-2 mt-5" data-aos="fade-up" data-aos-duration="1000">Frameworks & Tools</h3>
      <div class="row" data-aos="fade-up" data-aos-duration="1000">
        <div class="col-12">
          <div class="card border-0 shadow-sm bg-body-tertiary">
            <div class="card-body p-4">
              <div class="row row-cols-2 bg row-cols-md-3 row-cols-lg-5 g-4 text-center">
                <div class="col" v-for="(tool, index) in tools" :key="index" data-aos="fade-up" data-aos-duration="1000"
                  :data-aos-delay="index * 50">
                  <div
                    class="py-4 px-3 rounded-3 bg-body-secondary h-100 d-flex flex-column align-items-center justify-content-center">
                    <i :class="tool.icon + ' text-primary fs-1 mb-3'"></i>
                    <h6 class="mb-1 text-body">{{ tool.name }}</h6>
                    <div class="small text-body-secondary">{{ tool.level }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillsPage',
  data() {
    return {
      skillCategories: [
        {
          title: 'Front-end',
          icon: 'bi bi-display',
          description: 'Creating responsive and interactive user interfaces with modern technologies',
          technologies: ['HTML5', 'CSS3', 'JavaScript', 'Vue.js', 'React'],
          experience: '5+ years'
        },
        {
          title: 'Back-end',
          icon: 'bi bi-server',
          description: 'Building robust and scalable server-side applications and APIs',
          technologies: ['Node.js', 'Express', 'MongoDB', 'SQL', 'REST APIs'],
          experience: '4+ years'
        },
        {
          title: 'Mobile',
          icon: 'bi bi-phone',
          description: 'Developing cross-platform mobile applications with cutting-edge frameworks',
          technologies: ['React Native', 'Flutter', 'iOS', 'Android'],
          experience: '3+ years'
        },
        {
          title: 'DevOps',
          icon: 'bi bi-gear',
          description: 'Implementing CI/CD pipelines and cloud infrastructure management',
          technologies: ['Docker', 'AWS', 'Git', 'GitHub Actions', 'Netlify'],
          experience: '2+ years'
        }
      ],
      programmingLanguages: [
        {
          name: 'JavaScript',
          icon: 'bi bi-filetype-js',
          percentage: 95,
          description: 'My primary language for both frontend and backend development with extensive experience in ES6+ features',
          projects: ['E-commerce Platform', 'CRM System', 'Data Visualization Dashboard']
        },
        {
          name: 'Python',
          icon: 'bi bi-filetype-py',
          percentage: 85,
          description: 'Used for data analysis, automation scripts, and backend API development',
          projects: ['Data Processing Pipeline', 'ML Prototypes', 'Web Scraping Tools']
        },
        {
          name: 'TypeScript',
          icon: 'bi bi-filetype-tsx',
          percentage: 90,
          description: 'Implementing type-safe applications with advanced features and patterns',
          projects: ['Enterprise SaaS Platform', 'Design System', 'Financial Dashboard']
        },
        {
          name: 'PHP',
          icon: 'bi bi-filetype-php',
          percentage: 75,
          description: 'Building custom WordPress themes, plugins and legacy system maintenance',
          projects: ['CMS Customization', 'E-learning Platform', 'API Integration']
        },
        {
          name: 'Java',
          icon: 'bi bi-filetype-java',
          percentage: 70,
          description: 'Enterprise application development and Android native applications',
          projects: ['Inventory Management System', 'Android Applications', 'REST APIs']
        },
        {
          name: 'SQL',
          icon: 'bi bi-filetype-sql',
          percentage: 80,
          description: 'Database design, optimization, and complex query development',
          projects: ['Data Warehouse', 'Reporting System', 'Database Migration']
        }
      ],
      tools: [
        { name: 'Git', icon: 'bi bi-git', level: 'Advanced' },
        { name: 'VS Code', icon: 'bi bi-code-square', level: 'Expert' },
        { name: 'Docker', icon: 'bi bi-boxes', level: 'Intermediate' },
        { name: 'Webpack', icon: 'bi bi-stack', level: 'Advanced' },
        { name: 'Figma', icon: 'bi bi-palette', level: 'Intermediate' },
        { name: 'AWS', icon: 'bi bi-cloud', level: 'Intermediate' },
        { name: 'NPM', icon: 'bi bi-box', level: 'Advanced' },
        { name: 'Jest', icon: 'bi bi-shield-check', level: 'Intermediate' },
        { name: 'GitHub', icon: 'bi bi-github', level: 'Advanced' },
        { name: 'Jira', icon: 'bi bi-kanban', level: 'Intermediate' }
      ]
    }
  },
}
</script>