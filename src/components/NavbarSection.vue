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
                                class="position-absolute bottom-0 start-50 translate-middle-x bg-primary rounded-top d-none d-lg-block indicator"
                                :class="{
                                    'active': $route.path === link.path,
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
            navbarOpen: false,
            transitionDuration: 300 // Duration in ms to match CSS transitions
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
        window.addEventListener('resize', this.handleResize);
        
        // Add page transition class to body
        document.body.classList.add('page-transitions');
    },
    beforeUnmount() {
        document.removeEventListener('click', this.handleClickOutside);
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        toggleNavbar() {
            this.navbarOpen = !this.navbarOpen;
            
            // Apply body class to prevent scrolling when menu is open
            if (this.navbarOpen) {
                document.body.classList.add('navbar-open');
            } else {
                setTimeout(() => {
                    document.body.classList.remove('navbar-open');
                }, this.transitionDuration);
            }
        },
        closeNavbar() {
            if (this.navbarOpen) {
                this.navbarOpen = false;
                setTimeout(() => {
                    document.body.classList.remove('navbar-open');
                }, this.transitionDuration);
            }
        },
        handleClickOutside(event) {
            if (!this.$refs.navbar.contains(event.target)) {
                this.closeNavbar();
            }
        },
        handleResize() {
            // Close the navbar if screen size changes to desktop
            if (window.innerWidth >= 992 && this.navbarOpen) {
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
    transition: background-color 0.3s ease, transform 0.4s ease;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(10px);
    background-color: rgba(33, 37, 41, 0.8) !important; /* Semi-transparent dark background */
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* Navigation link animations */
.nav-link {
    position: relative;
    overflow: hidden;
    transition: color 0.3s ease, background-color 0.3s ease;
}

/* Desktop navigation indicator animation */
.indicator {
    height: 3px;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    width: 0;
}

.indicator.active {
    width: 75%;
}

/* Mobile Menu Styles */
@media (max-width: 991.98px) {
    .navbar-collapse {
        position: fixed;
        top: 56px; /* Standard Bootstrap navbar height */
        left: 0;
        right: 0;
        background-color: rgba(52, 58, 64, 0.95) !important;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        z-index: 1000;
        padding: 0;
        height: 0;
        opacity: 0;
        overflow: hidden; /* Hide overflow until open */
        transition: opacity 0.3s ease, height 0.3s ease;
        display: block !important; /* Ensure it's always a block */
    }

    .navbar-collapse.show {
        height: auto;
        max-height: calc(100vh - 56px); /* Full viewport height minus navbar */
        opacity: 1;
        overflow-y: auto; /* Enable scrolling only when open */
        padding: 1rem;
    }

    /* Tablet-specific adjustments */
    @media (min-width: 576px) and (max-width: 991.98px) {
        .navbar-collapse.show {
            min-height: 200px; /* Minimum height for tablets */
        }
    }

    .nav-link {
        padding: 0.75rem 1rem;
        border-radius: 0.25rem;
        transition: all 0.2s ease;
    }

    .nav-link:hover {
        background-color: rgba(255, 255, 255, 0.1);
        transform: translateX(5px);
    }

    .navbar-nav {
        padding-bottom: 1rem; /* Add space at the bottom of the menu */
        opacity: 0;
        transform: translateY(-10px);
        transition: opacity 0.3s ease, transform 0.3s ease;
        transition-delay: 0.05s;
    }
    
    .navbar-collapse.show .navbar-nav {
        opacity: 1;
        transform: translateY(0);
    }
    
    /* Apply animation for nav items */
    .navbar-nav .nav-item {
        opacity: 0;
        transform: translateY(10px);
        transition: opacity 0.3s ease, transform 0.3s ease;
        transition-delay: calc(0.05s * var(--item-index, 0));
    }
    
    .navbar-collapse.show .nav-item {
        opacity: 1;
        transform: translateY(0);
    }
    
    /* Apply index for staggered animation */
    .navbar-nav .nav-item:nth-child(1) { --item-index: 1; }
    .navbar-nav .nav-item:nth-child(2) { --item-index: 2; }
    .navbar-nav .nav-item:nth-child(3) { --item-index: 3; }
    .navbar-nav .nav-item:nth-child(4) { --item-index: 4; }
    .navbar-nav .nav-item:nth-child(5) { --item-index: 5; }
}

/* Page transition styles */
.page-transitions {
    transition: background-color 0.3s ease;
}

/* Prevent scrolling when mobile menu is open */
body.navbar-open {
    overflow: hidden;
}

/* Dark Mode Toggle Styles */
.theme-toggle {
    position: relative;
    height: 26px;
    width: 52px;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.theme-toggle:hover {
    transform: scale(1.05);
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
    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); /* Bouncy animation */
}

.toggle-thumb.dark {
    transform: translateX(26px);
}

.toggle-icon {
    font-size: 0.7rem;
    color: #ffffff;
}

/* Navbar brand icon animation */
.navbar-brand i {
    transition: transform 0.3s ease;
}

.navbar-brand:hover i {
    transform: rotate(15deg);
}

/* Router transition animation */
.router-link-active {
    transition: all 0.3s ease;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Add this to your global CSS or App.vue style */
.fade-enter-active {
    animation: fadeIn 0.4s ease-out;
}
</style>