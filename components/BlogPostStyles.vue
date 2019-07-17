<template>
</template>
<style lang="scss">
    main {
        width: 80vw;
        margin: 2rem;
        @media only screen and (min-width: 480px) {
            width: 80vw;
            margin: 4rem;
        }
        @media only screen and (min-width: 992px) {
            width: 50vw;
            margin: 8rem;
        }
        h1 {
            margin-bottom: 1rem;
            font-size: 2rem;
            @media only screen and (min-width: 480px) {
                margin-bottom: 2rem;
                font-size: 4rem;
            }
        }
        article {
            margin-top: 2rem;
            font-size: .8rem;
            @media only screen and (min-width: 480px) {
                font-size: 1.25rem;
            }
            h2 {
                margin-bottom: .5rem;
            }
            p {
                margin-bottom: 1rem;
                @media only screen and (min-width: 480px) {
                    margin-bottom: 2rem;
                }
                a {
                    position: relative;
                    padding: 2px 0;
                    color: #000;
                    font-weight: 900;
                    white-space: nowrap;
                    &:after {
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 2px;
                        background-color: #000;
                        border: 1px solid #000;
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
</style>
