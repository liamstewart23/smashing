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
        -webkit-animation: fadein 3s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadein 3s; /* Firefox < 16 */
        -ms-animation: fadein 3s; /* Internet Explorer */
        -o-animation: fadein 3s; /* Opera < 12.1 */
        animation: fadein 3s;
    }

    @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Firefox < 16 */
    @-moz-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Safari, Chrome and Opera > 12.1 */
    @-webkit-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Internet Explorer */
    @-ms-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Opera < 12.1 */
    @-o-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }


    body {
        width: 100 wh;
        height: 90vh;
        color: #2f2f2f;
       /* background: linear-gradient(-45deg, #a123d5, #d2d523, #d52323, #2331d5, #23d57b, #EE7752);
        background-size: 400% 400%;
        animation: Gradient 25s ease infinite; */
    }

    .page-enter-active, .page-leave-active {
        transition: all .25s ease-out;
    }

    .page-enter, .page-leave-active {
        opacity: 0;
        transform-origin: 50% 50%;
    }

    @keyframes Gradient {
        0% {
            background-position: 0% 50%
        }
        50% {
            background-position: 100% 50%
        }
        100% {
            background-position: 0% 50%
        }
    }

    a,
    a:visited,
    a:active {
        color: #121314;
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
