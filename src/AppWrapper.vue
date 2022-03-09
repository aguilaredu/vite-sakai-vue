<template>
    <Landing v-if="$route.path === '/landing'" @change-theme="changeTheme" />
    <Login v-else-if="$route.path === '/login'" />
    <Error v-else-if="$route.path === '/error'" />
    <NotFound v-else-if="$route.path === '/notfound'" />
    <Access v-else-if="$route.path === '/access'" />
    <App v-else @change-theme="changeTheme" />
</template>

<script>
import EventBus from './AppEventBus.js';
import App from './App.vue';
import Landing from './pages/LandingDemo.vue';
import Login from './pages/Login.vue';
import Error from './pages/Error.vue';
import NotFound from './pages/NotFound.vue';
import Access from './pages/Access.vue';

export default {
    methods: {
        changeTheme(event) {
            let themeElement = document.getElementById('theme-link');
            themeElement.setAttribute('href', themeElement.getAttribute('href').replace(this.$appState.theme, event.theme));
            this.$appState.theme = event.theme;
            this.$appState.darkTheme = event.dark;
            EventBus.emit('change-theme', event);

            if (event.theme.startsWith('md')) {
                this.$primevue.config.ripple = true;
            }
        }
    },
    components: {
        App,
        Landing,
        Login,
        Error,
        NotFound,
        Access
    }
}
</script>