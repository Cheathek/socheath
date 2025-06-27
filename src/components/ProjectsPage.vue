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
                        <i class="bi bi-play-circle me-1"></i>Demo
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
                  <p class="card-text mb-1" style="text-align: justify; word-spacing: -0.1em"><span
                      class="fw-semibold text-primary">Responsibility:</span> {{
                        project.responsibility }}</p>
                </div>
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
                <img :src="project.image" class="card-img-top project-img" alt="Project Image" loading="lazy">
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
                        <i class="bi bi-play-circle me-1"></i>Demo
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
                  <p class="card-text mb-1"><span class="fw-semibold text-info">Purpose:</span> {{ project.purpose }}
                  </p>
                  <p class="card-text mb-1"><span class="fw-semibold text-info">Role:</span> {{ project.role }}</p>
                  <p class="card-text mb-1" style="text-align: justify; word-spacing: -0.1em"><span
                      class="fw-semibold text-info">Responsibility:</span> {{
                        project.responsibility }}</p>
                </div>
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
//School project
import webDesign from '../assets/school/webDesign.png';
import game from '../assets/school/game.png';
import pos from '../assets/school/pos.png';
import plan from '../assets/school/air-plan.png';
import penhjet from '../assets/school/penhjet.png';

//company
import itsolution from '../assets/company/itsolution.png';
import ccd from '../assets/company/ccd.png';

export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        // Company Projects
        {
          title: 'Production System',
          date: '25 Jan 2025 - Now',
          company: 'Confidential',
          purpose: 'Confidential',
          role: 'Full-stack Developer',
          responsibility: 'Confidential',
          image: ccd,
          technologies: ['Laravel', 'Vue.js', 'MySQL', 'BoorstrapVue'],
          demoLink: 'http://143.198.206.150/',
          codeLink: null,
          type: 'company'
        },
        {
          title: 'E-Commerce Platform',
          date: '1 Aug 2024 - 30 Nov 2024',
          company: 'IT Solution Digital (Internship)',
          purpose: 'Develop e-commerce website to sell all the accessory.',
          role: 'WordPress Developer',
          responsibility: 'Customized WordPress to align with branding and functional needs, configured essential plugins, optimized performance, and collaborated with teams to ensure a responsive, user-friendly design.',
          image: itsolution,
          technologies: ['WordPress'],
          demoLink: 'https://durabletechs.com/',
          codeLink: null,
          type: 'company'
        },

        // School Projects
        {
          title: 'Virtual Company II Project (VC2)',
          date: '10 Jun 2024 - 26 Jul 2024',
          institution: 'PNC',
          purpose: 'Create "Penh Jet Salon" website to help users find nearby salons and book makeup or massage appointments easily.',
          role: 'UX/UI Designer',
          responsibility: 'Designed clean, consistent interfaces using Figma and reviewed designs to ensure accurate final implementation.',
          image: penhjet,
          technologies: ['Vue.js', 'Laravel', 'MySQL', 'Vuetify', 'Bootstrap', 'Tailwind', 'BootstrapVue'],
          demoLink: null,
          codeLink: 'https://github.com/vichhekachhen/G5-Penh-Jet-Salon',
          type: 'school'
        },
        {
          title: 'OOP TypeScript Project',
          date: '22 Apr 2024 - 3 May 2024',
          institution: 'PNC',
          purpose: 'To develop a console-based Airline Management System that applies OOP principles to manage flights, bookings, and related operations effectively.',
          role: 'Manual Testing',
          responsibility: 'Run the console application to verify each feature (e.g., does the booking system correctly update seats?).',
          image: plan,
          technologies: ['TypeScript'],
          demoLink: null,
          codeLink: 'https://github.com/Khav9/C-5-Airline',
          type: 'school'
        },
        {
          title: 'Virtual Company I Project (CV1)',
          date: '8 Jan 2024 - 28 Mar 2024',
          institution: 'PNC',
          purpose: 'We build the POS system helps manage sales, track items, and improve service for small to medium businesses.',
          role: 'Code Quality Manager',
          responsibility: 'As a Code Quality Manager, I ensure code meets standards, review and improve it, and help developers write clean, maintainable code.',
          image: pos,
          technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'Bootstrap'],
          demoLink: null,
          codeLink: 'https://github.com/naydany/G3-POS-SYSTEM',
          type: 'school'
        },
        {
          title: 'Project Game',
          date: '18 Oct 2023 - 27 Oct 2023',
          institution: 'PNC',
          purpose: 'Design the game\'s interface and user experience to make it smooth and enjoyable.',
          role: 'UI/UX Designer',
          responsibility: 'Implemented core game mechanics and player interaction systems',
          image: game,
          technologies: ['Algorithm'],
          demoLink: null,
          codeLink: 'https://github.com/SENRIN-SIM/game-project',
          type: 'school'
        },
        {
          title: 'Web Design',
          date: '12 Sep 2023 - 05 Oct 2023',
          institution: 'PNC',
          purpose: 'To create an attractive, user-friendly gym website that helps users easily find information, sign up for memberships, and stay engaged with the gym\'s services.',
          role: 'UX/UI Designer',
          responsibility: 'As a UX/UI Designer, I create clean layouts, ensure the gym website is easy to use on all devices, and work with developers to improve the user experience.',
          image: webDesign,
          technologies: ['HTML', 'CSS', 'SASS'],
          demoLink: 'https://b6-sportclubs.vercel.app/',
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