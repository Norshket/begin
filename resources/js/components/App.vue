<template>
    <v-app>
        <!-- <loading ref="loading" /> -->

        <component :is="currentLayout" v-if="isRouterLoaded">
            <v-fade-transition mode="out-in">
                <router-view />
            </v-fade-transition>
        </component>
    </v-app>
</template>


<script>
import defaultLayout from '../layouts/default.vue'
import authLayout from '../layouts/auth.vue'

export default {
    name: 'app',
    components: {
        defaultLayout,
        authLayout,
    },

    computed: {
        isRouterLoaded: function () {
            return this.$route.name !== null
        },

        currentLayout: function () {
            const layout = this.$route.matched.slice().reverse().find(route => route.meta.layout)?.meta.layout || 'default'
            return layout + 'Layout'
        },
    },

}

</script>

