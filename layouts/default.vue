<template>
    <div>
        <app-nav/>
        <nuxt/>
    </div>
</template>

<script>
    import AppNav from "~/components/AppNav.vue";

    export default {
        components: {
            AppNav
        },
        data() {
            return {
                menuActive: 'is-active',
            }
        }
    };
</script>


<style lang="scss">

    html {
        font-family: "Quicksand", sans-serif;
        font-size: 16px;
        word-spacing: 1px;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
        color: #2f2f2f;
        animation: fadein 3s;
    }

    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    body {
        width: 100 wh;
        height: 90vh;
        color: #2f2f2f;
    }

    .page-enter-active, .page-leave-active {
        transition: all .25s ease-out;
    }

    .page-enter, .page-leave-active {
        opacity: 0;
        transform-origin: 50% 50%;
    }

    a,
    a:visited,
    a:active {
        color: #121314;
        white-space: nowrap;
        text-decoration: none;
    }


    h1, .h1,
    h2, .h2,
    h3, .h3,
    h4, .h4,
    h5, .h5,
    h6, .h6, li {
        font-family: "Roboto", sans-serif;
        font-weight: 900;
    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
        margin: 0;
    }


    a:not(.noUnderline) {
        position: relative;
        padding: 2px 0;
        color: #2f2f2f;

        &:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #2f2f2f;
            border: 1px solid #2f2f2f;
            border-radius: 3rem;
            transform: scaleX(0);
            transform-origin: bottom left;
            transition: transform 0.3s;
        }

        &:hover:after {
            transform: scaleX(1);
        }

    }


</style>
