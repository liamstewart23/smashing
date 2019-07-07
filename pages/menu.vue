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
                    font-size: 1rem;
                    @media only screen and (min-width: 480px){
                        font-size: 2rem;
                    }
                    margin-bottom: 2rem;
                    position: relative;
                    display: block;
                    a {
                        position: relative;
                        padding: 10px 0;
                        color: #fff;
                        &:after {
                            content: '';
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            width: 100%;
                            height: 2px;
                            background-color: #fff;
                            border: 1px solid #fff;
                            border-radius: 3rem;
                            transform: scaleX(0);
                            transform-origin: bottom left;
                            transition: transform 0.3s;
                        }
                        &:hover:after {
                            transform: scaleX(1);
                        }
                    }
                }
            }
        }
    }
</style>

