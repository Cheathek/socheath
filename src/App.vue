<template>
  <div>
    <div class="notification-container user-select-none">
      <div v-if="showRightClickAlert" class="alert-toast alert-warning">
        Right-click is disabled on this website!
      </div>
    </div>
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
    const showRightClickAlert = ref(false);
    let alertTimeout = null;

    onMounted(() => {
      document.addEventListener('contextmenu', (e) => {
        e.preventDefault();

        // Clear existing timeout if any
        if (alertTimeout) {
          clearTimeout(alertTimeout);
        }

        // Show alert
        showRightClickAlert.value = true;

        // Hide alert after 2 seconds
        alertTimeout = setTimeout(() => {
          showRightClickAlert.value = false;
        }, 2000);

        return false;
      });
    });

    return {
      currentYear,
      showRightClickAlert
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

.notification-container {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1050;
  width: auto;
  max-width: 90%;
}

.alert-toast {
  margin-top: 40px;
  padding: 12px 24px;
  border-radius: 8px;
  animation: fadeInDown 0.5s ease, fadeOutUp 0.5s ease 4.5s;
  backdrop-filter: blur(10px);
  border: 1px solid;
  min-width: 250px;
  text-align: center;
}

.alert-warning {
  background-color: rgba(255, 193, 7, 0.65);
  color: #ffffff;
  border: 1px solid rgba(255, 193, 7, 0.9);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeOutUp {
  from {
    opacity: 1;
    transform: translateY(0);
  }

  to {
    opacity: 0;
    transform: translateY(-20px);
  }
}
</style>