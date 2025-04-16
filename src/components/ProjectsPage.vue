<template>
  <section id="project">
    <div class="container">
      <div class="section-title" data-aos="fade-up" data-aos-duration="1200">
        <h2>My Projects</h2>
        <p>Check out some of my recent work</p>
      </div>

      <!-- Company Projects -->
      <div class="mb-5" v-if="companyProjects.length > 0">
        <h3 class="mb-4 border-bottom pb-2" data-aos="fade-up" data-aos-duration="1000">Company Projects</h3>
        <div class="row g-4">
          <div class="col-md-6 col-lg-4" v-for="(project, index) in companyProjects" :key="'company-' + index"
            data-aos="fade-up" :data-aos-delay="index * 100" data-aos-duration="800">
            <div class="card project-card border-0 shadow-sm bg-body-tertiary h-100">
              <div class="position-relative overflow-hidden">
                <img :src="project.image" class="card-img-top" alt="Project Image">
                <span class="position-absolute top-0 end-0 bg-primary text-white px-2 py-1 small rounded-bl">
                  Professional
                </span>
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
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">{{ project.title }}</h5>
                <p class="card-text text-muted flex-grow-1">{{ project.description }}</p>
                <div class="mt-2 mb-3">
                  <span v-for="(tech, i) in project.technologies" :key="i"
                    class="badge text-muted fw-normal me-2 mb-2 border border-primary tech-badge">
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
            <div class="card project-card border-0 shadow-sm bg-body-tertiary h-100">
              <div class="position-relative overflow-hidden">
                <img :src="project.image" class="card-img-top" alt="Project Image">
                <span class="position-absolute top-0 end-0 bg-info text-white px-2 py-1 small rounded-bl">
                  Academic
                </span>
                <div class="card-img-overlay d-flex align-items-end p-0">
                  <div class="w-100 bg-dark bg-opacity-50 backdrop-filter-blur text-white p-2 text-white p-2 translate-overlay">
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
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">{{ project.title }}</h5>
                <p class="card-text text-muted flex-grow-1">{{ project.description }}</p>
                <div class="mt-2 mb-3">
                  <span v-for="(tech, i) in project.technologies" :key="i"
                    class="badge text-muted fw-normal me-2 mb-2 border border-info tech-badge">
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
          title: 'E-commerce Platform',
          description: 'A fully responsive e-commerce site with product filtering, cart functionality, and user authentication.',
          image: 'https://media.istockphoto.com/id/583809524/photo/alberta-wilderness-near-banff.jpg?s=612x612&w=0&k=20&c=hiI3ib9ibDxAgqEZEH09EO3JOw94v5xh6hzcuXGhO-M=',
          technologies: ['Vue.js', 'Vuex', 'Node.js', 'MongoDB', 'Laravel'],
          demoLink: '#',
          codeLink: '#',
          type: 'company'
        },
        {
          title: 'Task Management App',
          description: 'A drag-and-drop task management application with team collaboration features.',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF9W9vwDNn5X7zAVeDHXgUKo0nBy0pqCaDcw&s',
          technologies: ['React', 'Redux', 'Firebase'],
          demoLink: null,
          codeLink: '#',
          type: 'company'
        },
        {
          title: 'Social Media Dashboard',
          description: 'An analytics dashboard for social media platforms with data visualization.',
          image: 'https://d57439wlqx3vo.cloudfront.net/iblock/0c3/0c3f532171f9630c21d5a0eca17fd2dc/63efe2e15d66640b10d860b8e4de0d17.jpg',
          technologies: ['Vue.js', 'D3.js', 'Express'],
          demoLink: '#',
          codeLink: null,
          type: 'company'
        },
        // School Projects
        {
          title: 'Portfolio Website',
          description: 'A personal portfolio website showcasing skills and projects with a modern design.',
          image: 'https://t3.ftcdn.net/jpg/00/50/13/40/360_F_50134069_oESZdArAXu3vkoixTdtdAfvRNj0fuVmZ.jpg',
          technologies: ['Vue.js', 'Bootstrap', 'GSAP'],
          demoLink: '#',
          codeLink: '#',
          type: 'school'
        },
        {
          title: 'Recipe Finder App',
          description: 'A recipe application that allows users to search and save recipes based on ingredients.',
          image: 'https://d150u0abw3r906.cloudfront.net/wp-content/uploads/2021/10/image2-2.png',
          technologies: ['React', 'Recipe API', 'Firebase'],
          demoLink: '#',
          codeLink: null,
          type: 'school'
        },
        {
          title: 'WordPress Blog',
          description: 'A blog built using WordPress with custom themes and plugins.',
          image: 'https://softwareforprojects.com/wp-content/uploads/2019/03/wordpress-project-management-plugin-themes.png',
          technologies: ['WordPress', 'PHP', 'MySQL'],
          demoLink: '#',
          codeLink: null,
          type: 'school'
        }
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
.project-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
}

.project-card img {
  height: 200px;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover img {
  transform: scale(1.05);
}

.card-body {
  transition: background-color 0.3s ease;
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
}

.tech-badge:hover {
  transform: translateY(-3px);
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
</style>