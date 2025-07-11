<template>
  <section>
    <div class="container">
      <div class="section-title" data-aos="fade-up">
        <h2>About Me</h2>
        <p>Learn more about who I am and what I do</p>
      </div>

      <div class="row align-items-stretch">
        <!-- Image column (left) -->
        <div class="col-lg-5 mb-4 mb-lg-0" data-aos="fade-right">
          <div class="h-100 position-relative">
            <div class="position-relative overflow-hidden rounded-4 shadow-lg" style="padding-top: 100%;">
              <img src="../assets/profile.jpg" alt="About Me"
                class="img-fluid position-absolute top-0 start-0 w-100 h-100 object-fit-cover rounded-3">
              <div class="position-absolute top-0 start-0 w-100 h-100 border-5 border-white rounded-3"
                style="transform: rotate(2deg); opacity: 0.8;"></div>
              <div class="position-absolute top-0 start-0 w-100 h-100 border-4 border-light rounded-3"
                style="transform: rotate(-3deg);"></div>
            </div>
            <div class="position-absolute bottom-0 end-0 bg-primary rounded-circle shadow"
              style="width: 40px; height: 40px; transform: translate(15px, 15px);"></div>
            <div class="position-absolute top-0 start-0 bg-warning rounded-circle shadow"
              style="width: 25px; height: 25px; transform: translate(-10px, -10px);"></div>
          </div>
        </div>

        <div class="col-lg-7" data-aos="fade-up">
          <div class="card border-0 shadow-sm rounded-3 p-4 bg-body-secondary h-100">
            <span
              class="badge bg-primary bg-opacity-10 text-primary fw-semibold mb-3 align-self-start px-3 py-2 rounded-pill">
              Front-end Developer & UI/UX Designer
            </span>
            <p class="lead fw-semibold mb-4">{{ personalData.intro }}</p>
            <p class="text-muted mb-4">{{ personalData.description }}</p>
            <div class="row g-4 mb-4">
              <div class="col-md-6" v-for="(item, index) in contactInfo" :key="index">
                <div class="d-flex align-items-center">
                  <div class="bg-primary bg-opacity-10 p-3 me-3 rounded-3">
                    <i :class="`bi bi-${item.icon} text-primary fs-5`"></i>
                  </div>
                  <div>
                    <h6 class="fw-semibold mb-1">{{ item.label }}</h6>
                    <p class="text-muted mb-0 small">{{ item.value }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="d-flex gap-3 pt-2 mt-auto">
              <button @click.prevent="downloadCV"
                class="btn bg-primary bg-opacity-25 border-primary border-opacity-25 backdrop-filter-blur hover-border-opacity-50 transition-all btn-sm px-4 py-2 rounded-pill d-flex align-items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                  class="d-inline-block">
                  <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1">
                    <path stroke-dasharray="2 4" stroke-dashoffset="6" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9">
                      <animate attributeName="stroke-dashoffset" dur="0.39s" repeatCount="indefinite" values="6;0" />
                    </path>
                    <path stroke-dasharray="32" stroke-dashoffset="32"
                      d="M12 21c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9">
                      <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.065s" dur="0.26s"
                        values="32;0" />
                    </path>
                    <path stroke-dasharray="10" stroke-dashoffset="10" d="M12 8v7.5">
                      <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.325s" dur="0.13s"
                        values="10;0" />
                    </path>
                    <path stroke-dasharray="6" stroke-dashoffset="6" d="M12 15.5l3.5 -3.5M12 15.5l-3.5 -3.5">
                      <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.455s" dur="0.13s"
                        values="6;0" />
                    </path>
                  </g>
                </svg>
                <span>Download CV</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Education Section -->
      <div class="row mt-5" data-aos="fade-up" data-aos-delay="200">
        <div class="col-12">
          <div class="card border-0 shadow-sm rounded-4">
            <div class="card-header bg-primary bg-opacity-10 border-0 py-3">
              <h5 class="mb-0 text-primary">Education</h5>
            </div>
            <div class="card-body p-4 bg-body-secondary">
              <div class="row g-4">
                <div class="col-md-12" v-for="(edu, index) in education" :key="index">
                  <div class="card border-0 h-100 shadow-sm" data-aos="fade-up">
                    <div class="card-body">
                      <div class="d-flex">
                        <div class="flex-shrink-0">
                          <div
                            class="bg-info bg-opacity-10 p-3 rounded-4 d-flex align-items-center justify-content-center"
                            style="width: 64px; height: 64px;">
                            <i class="bi bi-mortarboard text-info fs-3"></i>
                          </div>
                        </div>
                        <div class="flex-grow-1 ms-4">
                          <div class="d-md-flex justify-content-between align-items-start mb-2">
                            <h5 class="mb-1">{{ edu.degree }}</h5>
                            <span class="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill">
                              {{ edu.period }}
                            </span>
                          </div>
                          <h6 class="text-muted mb-2">{{ edu.school }}</h6>
                          <p class="mb-2">{{ edu.description }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Skills Preview Section -->
      <div class="row mt-5" data-aos="fade-up" data-aos-delay="600">
        <div class="col-12">
          <div class="card border-0 shadow-sm rounded-4">
            <div
              class="card-header bg-primary bg-opacity-10 border-0 py-3 d-flex justify-content-between align-items-center">
              <h5 class="mb-0 text-primary">Technology Stack</h5>
              <router-link to="/skills" class="btn btn-sm btn-outline-primary rounded-pill px-3">
                View All Skills
              </router-link>
            </div>
            <div class="card-body bg-body-tertiary p-4">
              <div class="row row-cols-3 row-cols-md-6 g-3">
                <div class="col" v-for="(tech, index) in technologies" :key="tech.name" data-aos="fade-up"
                  :data-aos-delay="index * 100" data-aos-duration="1000">
                  <div class="d-flex flex-column align-items-center p-3 bg-body-secondary border rounded-3 h-100">
                    <i :class="tech.icon + ' fs-3 mb-2 text-' + tech.color"></i>
                    <span class="small text-center">{{ tech.name }}</span>
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
  data() {
    return {
      personalData: {
        intro: "I'm passionate about creating beautiful, functional websites and applications that provide great user experiences.",
        description: "As a recent Web Development graduate, I possess a foundational understanding of Web Development principles and a keen interest in front-end technologies. I am eager to apply my problem-solving abilities and collaborative spirit to contribute to innovative web solutions."
      },
      contactInfo: [
        { icon: "geo-alt", label: "Location", value: "Sangkat Toeuk Thla, Khan Sen Sok, Phnom Penh, Cambodia." },
        { icon: "award", label: "Degree", value: "Associate Degree of Web Development" },
        { icon: "phone", label: "Phone", value: "012 739 866" },
        { icon: "envelope", label: "Email", value: "admin@gmail.com" },
      ],
      // New education array with sample data
      education: [
        {
          degree: "Associate Degree of Web Development",
          school: "University of Technology",
          period: "2020 - 2022",
          description: "Completed an intensive program focusing on front-end and back-end web development technologies, with emphasis on modern JavaScript frameworks and responsive design principles.",
        },
        {
          degree: "High School Diploma",
          school: "Sen Sok High School",
          period: "2016 - 2020",
          description: "Graduated with honors, with focus on Computer Science and Mathematics.",
        }
      ],
      technologies: [
        { name: "HTML5", icon: "bi bi-filetype-html", color: "danger" },
        { name: "CSS3", icon: "bi bi-filetype-css", color: "primary" },
        { name: "JavaScript", icon: "bi bi-filetype-js", color: "warning" },
        { name: "Vue.js", icon: "bi bi-box", color: "success" },
        { name: "Bootstrap", icon: "bi bi-bootstrap", color: "primary" },
        { name: "Git", icon: "bi bi-git", color: "danger" }
      ]
    }
  },
  methods: {
    downloadCV() {
      const link = document.createElement('a');
      link.href = '/socheath.pdf';
      link.setAttribute('download', 'socheath.pdf');
      document.body.appendChild(link);
      link.click();
      link.remove();
    }
  }
}
</script>