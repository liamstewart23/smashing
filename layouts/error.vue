<template>
    <main>
        <div class="container">
            <h1 v-if="error.statusCode === 404">Page not found.</h1>
            <h1 v-else>An error occurred</h1>
            <nuxt-link to="/" class="btn">Go home</nuxt-link>
        </div>
    </main>
</template>

<script>
    export default {
        props: ['error'],
        layout: 'error'
    }
</script>

<style lang="scss" scoped>
    main {
        width: 80vw;
        margin: 2rem;
        @media only screen and (min-width: 480px) {
            width: 60vw;
            margin: 4rem;
        }
        @media only screen and (min-width: 992px) {
            width: 40vw;
            margin: 8rem;
        }

        h1 {
            margin-bottom: 2rem;
            font-size: 2rem;
            @media only screen and (min-width: 480px) {
                font-size: 4rem;
            }
        }

        .btn {
            border: 2px solid #fff;
            border-radius: 25px;
            padding: 0.5rem 1rem;
            text-transform: capitalize;

            &:hover {
                opacity: .8;
            }
        }
    }
</style>