<template>
  <div>
    <NavbarSection />
    <main>
      <router-view />
    </main>
    <footer v-if="!$route.meta.hideFooter" class="bg-dark text-white py-4 border-top"
      style="backdrop-filter: blur(10px);">
      <div class="container">
        <div class="row align-items-center text-center text-md-start">
          <div class="col-md-6 mb-3 mb-md-0">
            <p class="mb-0 small">&copy; {{ currentYear }} Portfolio. All rights reserved.</p>
          </div>
          <div class="col-md-6">
            <div class="d-flex justify-content-center justify-content-md-end gap-3">
              <a href="https://github.com/cheathek" class="text-white fs-5">
                <i class="bi bi-github" style="--bs-text-opacity: 1; color: #ffffff;"></i>
              </a>
              <a href="https://t.me/cheatzx" class="text-white fs-5">
                <i class="bi bi-telegram" style="--bs-text-opacity: 1; color: #0088CC;"></i>
              </a>
              <a href="https://www.linkedin.com/in/socheathek-mao" class="text-white fs-5">
                <i class="bi bi-linkedin" style="--bs-text-opacity: 1; color: #0A66C2;"></i>
              </a>
              <a href="https://www.facebook.com/cheathzx" class="text-white fs-5">
                <i class="bi bi-facebook" style="--bs-text-opacity: 1; color: #1877F2;"></i>
              </a>
              <a href="mailto:maosocheathek@gmail.com" class="text-white fs-5">
                <i class="bi bi-envelope-fill" style="--bs-text-opacity: 1; color: #ffffff;"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>


<script>
import { onMounted, ref } from 'vue';
import NavbarSection from './components/NavbarSection.vue';

export default {
  components: {
    NavbarSection
  },
  setup() {
    const currentYear = ref(new Date().getFullYear());

    // onMounted(() => {
    //   AOS.init({
    //     duration: 1000,
    //     easing: 'ease-in-out',
    //     once: true
    //   });
    // });

    return {
      currentYear
    };
  }
}
</script>
<style>
section {
  padding: 100px 0;
}

.section-title {
  margin-bottom: 50px;
  text-align: center;
}

.section-title h2 {
  position: relative;
  display: inline-block;
  padding-bottom: 20px;
  margin-bottom: 20px;
}

.section-title h2:before {
  content: '';
  position: absolute;
  width: 50px;
  height: 3px;
  background: #007bff;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>