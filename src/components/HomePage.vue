<template>
  <section class="min-vh-100 position-relative overflow-hidden bg-dark text-light">
    <div data-aos="fade" data-aos-duration="1000"
      class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25">
      <img src="../assets/img-bg.jpg" alt="Background" class="object-fit-cover w-100 h-100">
    </div>
    <div class="container position-relative" style="z-index: 1;">
      <div class="row mt-5 align-items-center justify-content-start">
        <div class="col-lg-8 text-left mt-5">
          <figure data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
            <figcaption class="blockquote-footer text-light opacity-75">
              Web Developer & <cite class="text-white">Designer</cite>
            </figcaption>
          </figure>
          <h1 data-aos="fade-up" data-aos-delay="200" data-aos-duration="800"
            class="display-4 fw-medium mb-3 mb-md-4 text-white">
            {{ greeting }}, I'm <cite class="text-primary">Kirigaya Kazuto (Kirito)</cite>
          </h1>
          <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="800" class="lead mb-5 text-light">
            Creating elegant, responsive, and functional web experiences.
          </p>
          <div class="d-flex flex-column flex-sm-row gap-3 justify-content-start">
            <router-link to="/projects" data-aos="fade-right" data-aos-delay="400" data-aos-duration="800"
              class="btn btn-lg px-4 px-sm-5 rounded-pill bg-white bg-opacity-10 border-white border-opacity-25 text-white backdrop-filter-blur hover-bg-opacity-25 hover-border-opacity-50 transition-all">
              View Work
            </router-link>
            <router-link to="/contact" data-aos="fade-left" data-aos-delay="400" data-aos-duration="800"
              class="btn btn-lg px-4 px-sm-5 rounded-pill bg-primary bg-opacity-10 border-primary border-opacity-25 text-white backdrop-filter-blur hover-bg-opacity-25 hover-border-opacity-50 transition-all">
              Contact Me
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: 'HomePage',
  data: () => ({
    userName: '',
    timeOfDay: ''
  }),
  computed: {
    greeting() {
      return this.userName ? `Good ${this.timeOfDay}, ${this.userName}` : `Good ${this.timeOfDay}`
    }
  },
  mounted() {
    AOS.init({ offset: 0, duration: 800, easing: 'ease', once: true });
  },
  created() {
    const hour = new Date().getHours();
    this.timeOfDay = hour < 12 ? 'Morning' : hour < 18 ? 'Afternoon' : 'Evening';
  }
}
</script>

<style>
.backdrop-filter-blur {
  backdrop-filter: blur(10px);
}

.hover-bg-opacity-25:hover {
  background-color: rgba(var(--bs-primary-rgb), 0.25) !important;
}
</style>