<template>
    <main>
        <h1>Don't be a stranger <span>just say hello.</span></h1>
        <h2>
            <a href="mailto:hello@liamstewart.ca" title="Send an email to hello@liamstewart.ca">hello@liamstewart.ca</a>
        </h2>
        <div class="contactGrid">
            <div class="row">
                <a href="https://www.linkedin.com/in/liamstewart23/" title="Liam Stewart on Linkedin" target="_blank" rel="noopener noreferrer">
                    <linkedin-icon/>
                </a>
                <a href="https://github.com/liamstewart23/" title="Liam Stewart on GitHub" target="_blank" rel="noopener noreferrer">
                    <github-icon/>
                </a>
            </div>
        </div>
    </main>
</template>

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
            margin-bottom: 1rem;
            font-size: 2rem;
            @media only screen and (min-width: 480px) {
                margin-bottom: 2rem;
                font-size: 4rem;
            }
            span {
                display: block;
            }
        }
        h2 {
            font-family: 'Quicksand';
            font-weight: normal;
        }
        .contactGrid {
            display: flex;
            margin-top: 4rem;

            .row {
                display: flex;
                width: 25%;
                margin-top: -2rem;
                justify-content: space-around;
                @media only screen and (min-width: 480px) {
                    width: 15%;
                }
                justify-content: space-between;
                font-size: 2rem;
                a {
                    svg {
                        width: 1.75rem;
                    }
                    &:hover {
                        opacity: .8;
                    }
                }
            }
        }
    }
</style>

<script>
    import GithubIcon from "~/components/GithubIcon.vue";
    import LinkedinIcon from "~/components/LinkedinIcon.vue";

    export default {
        components: {
            GithubIcon,
            LinkedinIcon
        }
    };
</script>

