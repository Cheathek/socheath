<template>
    <div class="page-navigation d-flex d-lg-none justify-content-between container mb-4">
        <div>
            <router-link v-if="previousRoute" :to="previousRoute.path" class="btn btn-outline-primary rounded-pill">
                <i class="bi bi-arrow-left me-2"></i> {{ previousRoute.name }}
            </router-link>
        </div>
        <div>
            <router-link v-if="nextRoute" :to="nextRoute.path" class="btn btn-outline-primary rounded-pill">
                {{ nextRoute.name }} <i class="bi bi-arrow-right ms-2"></i>
            </router-link>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
    setup() {
        const route = useRoute();

        // Define your page order
        const pages = [
            { path: '/', name: 'Home' },
            { path: '/about', name: 'About' },
            { path: '/skills', name: 'Skills' },
            { path: '/projects', name: 'Projects' },
            { path: '/contact', name: 'Contact' }
        ];

        const currentIndex = computed(() =>
            pages.findIndex(page => page.path === route.path)
        );

        const previousRoute = computed(() =>
            currentIndex.value > 0 ? pages[currentIndex.value - 1] : null
        );

        const nextRoute = computed(() =>
            currentIndex.value < pages.length - 1 ? pages[currentIndex.value + 1] : null
        );

        return {
            previousRoute,
            nextRoute
        };
    }
};
</script>

<style scoped>
.page-navigation {
    margin-top: 40px;
}

.btn {
    background-color: transparent;
    border: 1px solid #0d6efd;
    color: #0d6efd;
    transition: all 0.3s ease;
    padding: 8px 20px;
}

.btn:hover {
    background-color: #0d6efd;
    color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
}

/* Match the dark theme as shown in the image */
@media (prefers-color-scheme: dark) {
    .btn {
        background-color: transparent;
        border-color: #0d6efd;
        color: #0d6efd;
    }

    .btn:hover {
        background-color: #0d6efd;
        color: white;
    }
}
</style>