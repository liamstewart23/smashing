<template>
    <main>
        <div class="row">
            <ul>
                <li>
                    <nuxt-link exact to="/">Home</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/about">About</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/work">Work</nuxt-link>
                </li>
            </ul>
        </div>
        <div class="row">
            <ul>

                <li>
                    <nuxt-link to="/blog">Blog</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/contact">Contact</nuxt-link>
                </li>
            </ul>

        </div>
    </main>
</template>


<style lang="scss" scoped>
    main {
        display: flex;
        height: 100%;
        justify-content: space-between;
        @media only screen and (min-width: 480px){
            margin: 8rem;
        }
        .row {
            flex: 1;
            ul {
                list-style: none;
                li {
                    font-size: 2rem;
                    font-weight: 900;
                    margin-bottom: 2rem;
                }
            }
        }
    }
</style>

