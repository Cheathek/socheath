<template>
  <section id="project">
    <div class="container">
      <div class="section-title text-center mb-5" data-aos="fade-up" data-aos-duration="1200">
        <h2 class="position-relative d-inline-block pb-3 mb-3">My Projects</h2>
        <p>Check out some of my recent work</p>
      </div>

      <!-- Company Projects -->
      <div class="mb-5" v-if="companyProjects.length > 0">
        <h3 class="mb-4 border-bottom pb-2" data-aos="fade-up" data-aos-duration="1000">Company Projects</h3>
        <div class="row g-4">
          <div class="col-md-6 col-lg-4" v-for="(project, index) in companyProjects" :key="'company-' + index"
            data-aos="fade-up" :data-aos-delay="index * 100" data-aos-duration="800">
            <div class="card h-100 border-0 shadow-sm bg-body-tertiary rounded-3 project-card overflow-hidden">
              <div class="position-relative overflow-hidden">
                <img :src="project.image" class="card-img-top project-img" alt="Project Image">
                <span class="position-absolute top-0 end-0 bg-primary text-white px-2 py-1 small">
                  Professional
                </span>
                <div class="position-absolute top-0 start-0 py-2 px-3">
                  <span class="company-badge text-white bg-primary p-1 rounded-pill px-3">{{ project.company }}</span>
                </div>
                <div class="card-img-overlay d-flex align-items-end p-0">
                  <div class="w-100 bg-dark bg-opacity-50 backdrop-filter-blur text-white p-2 translate-overlay">
                    <div class="d-flex justify-content-end">
                      <a v-if="project.demoLink" :href="project.demoLink" class="btn btn-outline-light btn-sm me-2"
                        target="_blank">
                        <i class="bi bi-play me-1"></i>Demo
                      </a>
                      <a v-if="project.codeLink" :href="project.codeLink" class="btn btn-outline-light btn-sm"
                        target="_blank">
                        <i class="bi bi-github me-1"></i> Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body p-4 d-flex flex-column">
                <div class="d-flex justify-content-between align-items-start mb-2">
                  <h5 class="card-title fw-semibold mb-0">{{ project.title }}</h5>
                  <span class="badge fw-semibold bg-secondary rounded-pill">{{ project.date }}</span>
                </div>
                <div class="mb-3">
                  <p class="card-text mb-1"><span class="fw-semibold text-primary">Purpose:</span> {{ project.purpose }}
                  </p>
                  <p class="card-text mb-1"><span class="fw-semibold text-primary">Role:</span> {{ project.role }}</p>
                  <p class="card-text mb-1"><span class="fw-semibold text-primary">Responsibility:</span> {{
                    project.responsibility }}</p>
                </div>
                <p class="card-text text-muted flex-grow-1">{{ project.description }}</p>
                <div class="mt-2 mb-2">
                  <span v-for="(tech, i) in project.technologies" :key="i"
                    class="badge rounded fw-semibold text-muted me-2 mb-2 border border-primary tech-badge">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- School Projects -->
      <div v-if="schoolProjects.length > 0">
        <h3 class="mb-4 border-bottom pb-2" data-aos="fade-up" data-aos-duration="1000">Academic Projects</h3>
        <div class="row g-4">
          <div class="col-md-6 col-lg-4" v-for="(project, index) in schoolProjects" :key="'school-' + index"
            data-aos="fade-up" :data-aos-delay="index * 100" data-aos-duration="800">
            <div class="card h-100 border-0 shadow-sm bg-body-tertiary rounded-3 project-card overflow-hidden">
              <div class="position-relative overflow-hidden">
                <img :src="project.image" class="card-img-top project-img" alt="Project Image">
                <span class="position-absolute top-0 end-0 bg-info text-white px-2 py-1 small">
                  Academy
                </span>
                <div class="position-absolute top-0 start-0 py-2 px-3">
                  <span class="institution-badge bg-info text-white p-1 rounded-pill px-3">{{ project.institution
                    }}</span>
                </div>
                <div class="card-img-overlay d-flex align-items-end p-0">
                  <div class="w-100 bg-dark bg-opacity-50 backdrop-filter-blur text-white p-2 translate-overlay">
                    <div class="d-flex justify-content-end">
                      <a v-if="project.demoLink" :href="project.demoLink" class="btn btn-outline-light btn-sm me-2"
                        target="_blank">
                        <i class="bi bi-play me-1"></i>Demo
                      </a>
                      <a v-if="project.codeLink" :href="project.codeLink" class="btn btn-outline-light btn-sm"
                        target="_blank">
                        <i class="bi bi-github me-1"></i> Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body p-4 d-flex flex-column">
                <div class="d-flex justify-content-between align-items-start mb-2">
                  <h5 class="card-title fw-semibold mb-0">{{ project.title }}</h5>
                  <span class="badge fw-semibold bg-secondary rounded-pill">{{ project.date }}</span>
                </div>
                <div class="mb-3">
                  <p class="card-text mb-1"><span class="fw-semibold text-info">Purpose:</span> {{ project.purpose }}</p>
                  <p class="card-text mb-1"><span class="fw-semibold text-info">Role:</span> {{ project.role }}</p>
                  <p class="card-text mb-1"><span class="fw-semibold text-info">Responsibility:</span> {{
                    project.responsibility }}</p>
                </div>
                <p class="card-text text-muted flex-grow-1">{{ project.description }}</p>
                <div class="mt-2 mb-2">
                  <span v-for="(tech, i) in project.technologies" :key="i"
                    class="badge rounded fw-semibold text-muted me-2 mb-2 border border-info tech-badge">
                    {{ tech }}
                  </span>
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
  name: 'Projects',
  data() {
    return {
      projects: [
        // Company Projects
        {
          title: 'E-Commerce Platform',
          description: 'A fully responsive e-commerce site with product filtering, cart functionality, and user authentication.',
          date: 'Jan 2024 - Apr 2024',
          company: 'IT Solution Digital (Internship)',
          purpose: 'Modernize client\'s online shopping experience to increase sales and user engagement',
          role: 'WordPress Developer',
          responsibility: 'Implemented responsive UI components and integration with payment gateways',
          image: 'https://media.istockphoto.com/id/583809524/photo/alberta-wilderness-near-banff.jpg?s=612x612&w=0&k=20&c=hiI3ib9ibDxAgqEZEH09EO3JOw94v5xh6hzcuXGhO-M=',
          technologies: ['WordPress'],
          demoLink: '#',
          codeLink: '#',
          type: 'company'
        },
        {
          title: 'Production System',
          description: 'A drag-and-drop task management application with team collaboration features.',
          date: 'Sep 2023 - Dec 2023',
          company: 'Chhorn Chenda (CCD)',
          purpose: 'Improve internal team productivity and project tracking',
          role: 'Full-stack Developer',
          responsibility: 'Built drag-and-drop functionality and real-time updates using WebSockets',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF9W9vwDNn5X7zAVeDHXgUKo0nBy0pqCaDcw&s',
          technologies: ['Laravel', 'Vue.js'],
          demoLink: 'http://143.198.206.150/',
          codeLink: null,
          type: 'company'
        },
        // School Projects
        {
          title: 'Web Design',
          description: 'A personal portfolio website showcasing skills and projects with a modern design.',
          date: 'Feb 2023 - Apr 2023',
          institution: 'PNC',
          purpose: 'Demonstrate web design skills and create a professional online presence',
          role: 'Solo Developer',
          responsibility: 'Designed and implemented all UI/UX elements and responsive layouts',
          image: 'https://t3.ftcdn.net/jpg/00/50/13/40/360_F_50134069_oESZdArAXu3vkoixTdtdAfvRNj0fuVmZ.jpg',
          technologies: ['HTML', 'CSS', 'SASS'],
          demoLink: 'https://b6-sportclubs.vercel.app/',
          codeLink: null,
          type: 'school'
        },
        {
          title: 'Project Game',
          description: 'An interactive game project built with React and Firebase.',
          date: 'Oct 2022 - Dec 2022',
          institution: 'PNC',
          purpose: 'Apply game development concepts in a team-based project',
          role: 'Game Logic Developer',
          responsibility: 'Implemented core game mechanics and player interaction systems',
          image: 'https://d150u0abw3r906.cloudfront.net/wp-content/uploads/2021/10/image2-2.png',
          technologies: ['Algorithm'],
          demoLink: null,
          codeLink: 'https://github.com/SENRIN-SIM/game-project',
          type: 'school'
        },
        {
          title: 'Virtual Company I Project (CV1)',
          description: 'A POS system project built for small retail businesses.',
          date: 'Mar 2022 - May 2022',
          institution: 'PNC',
          purpose: 'Create a functional POS system with inventory management',
          role: 'Backend Developer',
          responsibility: 'Built database schema and implemented business logic',
          image: 'https://softwareforprojects.com/wp-content/uploads/2019/03/wordpress-project-management-plugin-themes.png',
          technologies: ['PHP', 'MySQL', 'HTML', 'CSS'],
          demoLink: 'https://github.com/naydany/G3-POS-SYSTEM',
          codeLink: null,
          type: 'school'
        },
        {
          title: 'OOP TypeScript Project',
          description: 'An airline reservation system built using OOP principles.',
          date: 'Mar 2022 - May 2022',
          institution: 'PNC',
          purpose: 'Apply object-oriented programming concepts to solve real-world problems',
          role: 'Lead Developer',
          responsibility: 'Designed class hierarchy and implemented core functionality',
          image: 'https://softwareforprojects.com/wp-content/uploads/2019/03/wordpress-project-management-plugin-themes.png',
          technologies: ['TypeScript'],
          demoLink: 'https://github.com/Khav9/C-5-Airline',
          codeLink: null,
          type: 'school'
        },
        {
          title: 'Laravel Project',
          description: 'A social media integration platform using Facebook API.',
          date: 'Mar 2022 - May 2022',
          institution: 'PNC',
          purpose: 'Learn modern PHP frameworks and social API integration',
          role: 'API Specialist',
          responsibility: 'Implemented OAuth flows and API endpoint integration',
          image: 'https://softwareforprojects.com/wp-content/uploads/2019/03/wordpress-project-management-plugin-themes.png',
          technologies: ['Laravel', 'Facebook API', 'MySQL'],
          demoLink: 'https://github.com/Cheathek/Facebook-API-C-2',
          codeLink: null,
          type: 'school'
        },
        {
          title: 'Virtual Company II Project (VC2)',
          description: 'A salon management system with appointment booking and customer management.',
          date: 'Mar 2022 - May 2022',
          institution: 'PNC',
          purpose: 'Build a complete business management solution for service-based businesses',
          role: 'Frontend Lead',
          responsibility: 'Created user interfaces and implemented appointment scheduling system',
          image: 'https://softwareforprojects.com/wp-content/uploads/2019/03/wordpress-project-management-plugin-themes.png',
          technologies: ['Vue.js', 'Laravel', 'MySQL'],
          demoLink: 'https://github.com/vichhekachhen/G5-Penh-Jet-Salon',
          codeLink: null,
          type: 'school'
        },
      ]
    }
  },
  computed: {
    companyProjects() {
      return this.projects.filter(project => project.type === 'company');
    },
    schoolProjects() {
      return this.projects.filter(project => project.type === 'school');
    }
  }
}
</script>

<style scoped>

.project-img {
  height: 200px;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .project-img {
  transform: scale(1.05);
}

.translate-overlay {
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.project-card:hover .translate-overlay {
  transform: translateY(0);
}

.tech-badge {
  transition: all 0.3s ease;
  padding: 0.4rem 0.8rem;
}

.tech-badge:hover {
  transform: translateY(-3px);
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
</style>