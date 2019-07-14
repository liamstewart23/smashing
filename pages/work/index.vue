<template>
    <main>
        <h1>Work</h1>

        <div class="posts">

            <article class="post">
                <nuxt-link to="/work/affinio" class="noUnderline">
                    <div class="image" style="background-image: url('/images/work/affinio.png');"></div>
                </nuxt-link>

                <h2>
                    <nuxt-link to="/work/affinio">
                        Affinio
                    </nuxt-link>
                </h2>
            </article>

            <article class="post">
                <nuxt-link to="/work/ocean-vodka" class="noUnderline">
                    <div class="image" style="background-image: url('/images/work/ocean.jpg');"></div>
                </nuxt-link>
                <h2>
                    <nuxt-link to="/work/ocean-vodka">
                        Ocean Vodka
                    </nuxt-link>
                </h2>
            </article>

            <article class="post">
                <nuxt-link to="/work/the-factory" class="noUnderline">
                    <div class="image" style="background-image: url('/images/work/factory.jpg');"></div>
                </nuxt-link>
                <h2>
                    <nuxt-link to="/work/the-factory">
                        The Factory
                    </nuxt-link>
                </h2>
            </article>

            <article class="post">
                <nuxt-link to="/work/cowan-insurance-group" class="noUnderline">
                    <div class="image" style="background-image: url('/images/work/cowan.jpg');"></div>
                </nuxt-link>
                <h2>
                    <nuxt-link to="/work/cowan-insurance-group">
                        Cowan Insurance Group
                    </nuxt-link>
                </h2>
            </article>

            <article class="post">
                <nuxt-link to="/work/recharge-with-milk" class="noUnderline">
                    <div class="image" style="background-image: url('/images/work/recharge.png');"></div>
                </nuxt-link>
                <h2>
                    <nuxt-link to="/work/recharge-with-milk">
                        Recharge With Milk
                    </nuxt-link>
                </h2>
            </article>

            <article class="post">
                <nuxt-link to="/work/maxliving" class="noUnderline">
                    <div class="image" style="background-image: url('/images/work/ml.jpg');"></div>
                </nuxt-link>
                <h2>
                    <nuxt-link to="/work/maxliving">
                        MaxLiving
                    </nuxt-link>
                </h2>
            </article>


        </div>

    </main>
</template>


<style lang="scss" scoped>
    main {
        margin: 2rem;
        @media only screen and (min-width: 480px) {
            margin: 4rem;
        }
        @media only screen and (min-width: 992px) {
            margin: 8rem;
        }
        h1 {
            margin-bottom: 2rem;
            font-size: 2rem;
            @media only screen and (min-width: 480px) {
                margin-bottom: 4rem;
                font-size: 4rem;
            }
        }

        .posts {
            @media only screen and (min-width: 480px) {
                display: flex;
                justify-content: space-between;
                width: 100%;
                flex-wrap: wrap;
            }
            .post {
                @media only screen and (min-width: 480px) {
                    width: 40%;
                }
                .image {
                    width: 100%;
                    height: 12rem;
                    background-position: center;
                    background-size: contain;
                    background-repeat: no-repeat;
                    @media only screen and (min-width: 480px) {
                        height: 20rem;
                    }
                }
                h2 {
                    margin-top: 1rem;
                }
                margin: 3rem 0;
            }
        }

    }
</style>