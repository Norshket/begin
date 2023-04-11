<template>
    <v-app>
        <!-- <loading ref="loading" /> -->

        <component :is="currentLayout" v-if="isRouterLoaded">
        <v-card>
            <h1>Hello App!</h1>
            <p>
                <router-link :to="{ name: 'main' }">main</router-link>
                <router-link :to="{ name: 'about' }">about</router-link>
            </p>

            <router-view></router-view>
        </v-card>
        </component>
    </v-app>
</template>


<script>
export default {
    computed: {
        isRouterLoaded: function () {            
            return this.$route.name !== null
        },

        currentLayout: function () {

            this.$route.matched.slice().reverse().find(route =>console.log(route.meta));

            const layout = this.$route.matched.slice().reverse().find(route => route.meta.layout)?.meta.layout || 'default'

            return layout + 'Layout'
        },
    },

    
}

</script>

