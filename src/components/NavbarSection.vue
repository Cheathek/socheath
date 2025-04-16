<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" ref="navbar">
        <div class="container">
            <router-link class="navbar-brand fw-bold d-flex align-items-center" to="/">
                <i class="bi bi-code-square me-2"></i>Portfolio
            </router-link>
            <button class="navbar-toggler" type="button" @click="toggleNavbar" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse" :class="{ 'show': navbarOpen }" ref="navbarCollapse" @click="closeNavbar">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item" v-for="link in links" :key="link.path">
                        <router-link class="nav-link position-relative py-2 px-3 mx-lg-1 d-flex align-items-center"
                            :to="link.path" :class="{
                                'active': $route.path === link.path,
                                'text-primary': $route.path === link.path,
                            }">
                            <i :class="`bi ${link.icon} me-2`"></i>
                            <span>{{ link.name }}</span>
                            <span
                                class="position-absolute bottom-0 start-50 translate-middle-x bg-primary rounded-top d-none d-lg-block"
                                :class="{
                                    'w-75 h-2': $route.path === link.path,
                                    'w-0 h-1': $route.path !== link.path
                                }"></span>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="d-flex align-items-center ms-3">
                <div class="theme-toggle" @click.stop="toggleDarkMode">
                    <div class="toggle-track" :class="{ 'dark': darkMode }">
                        <div class="toggle-thumb" :class="{ 'dark': darkMode }">
                            <i class="toggle-icon" :class="darkMode ? 'bi-moon-fill' : 'bi-sun-fill'"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavbarSection',
    data() {
        return {
            links: [
                { path: '/', name: 'Home', icon: 'bi-house-door' },
                { path: '/about', name: 'About Me', icon: 'bi-person' },
                { path: '/skills', name: 'Skills', icon: 'bi-code-slash' },
                { path: '/projects', name: 'Projects', icon: 'bi-collection' },
                { path: '/contact', name: 'Contact', icon: 'bi-chat-square' }
            ],
            darkMode: false,
            navbarOpen: false
        }
    },
    created() {
        if (localStorage.getItem('darkMode')) {
            this.darkMode = localStorage.getItem('darkMode') === 'true';
            this.applyDarkMode();
        }
    },
    mounted() {
        document.addEventListener('click', this.handleClickOutside);
    },
    beforeUnmount() {
        document.removeEventListener('click', this.handleClickOutside);
    },
    methods: {
        toggleNavbar() {
            this.navbarOpen = !this.navbarOpen;
        },
        closeNavbar() {
            this.navbarOpen = false;
        },
        handleClickOutside(event) {
            if (!this.$refs.navbar.contains(event.target)) {
                this.closeNavbar();
            }
        },
        toggleDarkMode() {
            this.darkMode = !this.darkMode;
            localStorage.setItem('darkMode', this.darkMode);
            this.applyDarkMode();
        },
        applyDarkMode() {
            const html = document.documentElement;
            if (this.darkMode) {
                html.setAttribute('data-bs-theme', 'dark');
                document.body.classList.add('bg-dark', 'text-light');
            } else {
                html.removeAttribute('data-bs-theme');
                document.body.classList.remove('bg-dark', 'text-light');
            }
        }
    },
    watch: {
        $route() {
            this.closeNavbar();
        }
    }
}
</script>

<style scoped>
/* Navbar Styles */
.navbar {
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(10px);
    background-color: rgba(33, 37, 41, 0.8) !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    transition: background-color 0.3s ease;
}

/* Mobile Menu Styles */
@media (max-width: 991.98px) {
    .navbar-collapse {
        position: fixed;
        top: 56px;
        left: 0;
        right: 0;
        background-color: rgba(52, 58, 64, 0.98) !important;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        z-index: 1000;
        padding: 0 1rem;
        max-height: 0;
        opacity: 0;
        overflow: hidden;
        transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .navbar-collapse.show {
        max-height: 300px;
        opacity: 1;
        padding: 1rem;
    }

    .nav-item {
        opacity: 0;
        transform: translateY(-10px);
        transition: opacity 0.3s ease, transform 0.3s ease;
    }

    .navbar-collapse.show .nav-item {
        opacity: 1;
        transform: translateY(0);
        transition-delay: calc(var(--i) * 0.1s);
    }

    .nav-link {
        padding: 0.75rem 1rem;
        border-radius: 0.25rem;
        margin: 0.25rem 0;
        transition: background-color 0.2s ease, transform 0.2s ease;
    }

    .nav-link:hover {
        background-color: rgba(255, 255, 255, 0.1);
        transform: translateX(5px);
    }
}

/* Dark Mode Toggle Styles */
.theme-toggle {
    position: relative;
    height: 26px;
    width: 52px;
    cursor: pointer;
}

.toggle-track {
    position: relative;
    height: 100%;
    width: 100%;
    background-color: #f8f9fa;
    border-radius: 34px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
}

.toggle-track.dark {
    background-color: #495057;
}

.toggle-thumb {
    position: absolute;
    top: 2px;
    left: 2px;
    height: 22px;
    width: 22px;
    background-color: #0d6efd;
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s ease;
}

.toggle-thumb.dark {
    transform: translateX(26px);
    background-color: #6c757d;
}

.toggle-icon {
    font-size: 0.7rem;
    color: white;
    transition: transform 0.3s ease;
}

.toggle-thumb:hover .toggle-icon {
    transform: scale(1.1);
}

/* Navbar brand icon animation */
.navbar-brand i {
    transition: transform 0.3s ease;
}

.navbar-brand:hover i {
    transform: rotate(15deg);
}
</style>