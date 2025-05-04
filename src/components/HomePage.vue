<template>
  <section class="min-vh-100 position-relative overflow-hidden bg-dark text-light">
    <!-- Background Overlay -->
    <div data-aos="fade" data-aos-duration="1000"
      class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25">
      <img src="../assets/img-bg.jpg" alt="Background" class="object-fit-cover w-100 h-100" loading="lazy" />
    </div>

    <!-- Content -->
    <div class="container position-relative" style="z-index: 1;">
      <div class="row mt-5 align-items-center justify-content-start">
        <div class="col-lg-8 text-left mt-5">
          <!-- Subtitle -->
          <figure data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
            <figcaption
              class="blockquote-footer typewriter-prefix fs-3 d-inline text-light opacity-90 opacity-75">
              I'm a
                <span ref="typewriter" class="font-monospace fw-meduim"></span>
            </figcaption>
          </figure>

          <!-- Heading -->
          <h1 data-aos="fade-up" data-aos-delay="200" data-aos-duration="800"
            class="display-4 fw-medium mb-3 mb-md-4 text-white">
            {{ greeting }}, I'm <cite class="text-primary">Kirigaya Kazuto (Kirito)</cite>
          </h1>

          <!-- Description -->
          <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="800" class="lead mb-5 text-light">
            Creating elegant, responsive, and functional web experiences.
          </p>

          <!-- Buttons -->
          <div class="d-flex flex-column flex-sm-row gap-3 justify-content-start">
            <router-link to="/projects" data-aos="fade-right" data-aos-delay="400" data-aos-duration="800"
              class="btn btn-lg px-4 px-sm-5 rounded-pill bg-white bg-opacity-10 border-white border-opacity-25 text-white backdrop-filter-blur hover-bg-opacity-25 hover-border-opacity-50 transition-all">
              View Work<i class="bi bi-collection fs-5 ms-2"></i>
            </router-link>
            <router-link to="/about" data-aos="fade-left" data-aos-delay="400" data-aos-duration="800"
              class="btn btn-lg px-4 px-sm-5 rounded-pill bg-primary bg-opacity-10 border-primary border-opacity-25 text-white backdrop-filter-blur hover-bg-opacity-25 hover-border-opacity-50 transition-all">
              About Me<i class="bi bi-person fs-5 ms-2"></i>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Typewriter from 'typewriter-effect/dist/core';

export default {
  name: 'HomePage',
  data() {
    return {
      userName: '',
      timeOfDay: '',
      roles: ['Web Developer', 'Designer', 'Problem Solver']
    };
  },
  computed: {
    greeting() {
      return this.userName ? `Good ${this.timeOfDay}, ${this.userName}` : `Good ${this.timeOfDay}`;
    }
  },
  created() {
    // Determine the time of day
    const hour = new Date().getHours();
    this.timeOfDay = hour < 12 ? 'Morning' : hour < 18 ? 'Afternoon' : 'Evening';
  },
  mounted() {
    this.initTypewriter();
  },
  methods: {
    initTypewriter() {
      new Typewriter(this.$refs.typewriter, {
        strings: this.roles,
        autoStart: true,
        loop: true,
        delay: 75,
        deleteSpeed: 50,
        pauseFor: 1500,
      });
    }
  }
};
</script>

<style>
.backdrop-filter-blur {
  backdrop-filter: blur(10px);
}

.hover-bg-opacity-25:hover {
  background-color: rgba(var(--bs-primary-rgb), 0.25) !important;
}
</style>