<template>
    <div class="menu">
        <nuxt-link exact to="/" class="noUnderline logo">
            L
        </nuxt-link>
        <nuxt-link exact to="/menu" class="noUnderline">
            <div class="hamburger hamburger--minus" v-bind:class="{ 'is-active': $route.path === '/menu' }" tabindex="0"
                 aria-label="Menu" role="button">
                <div class="hamburger-box">
                    <div class="hamburger-inner"></div>
                </div>
            </div>
        </nuxt-link>
    </div>
</template>

<style lang="scss" scoped>

    .menu {
        display: flex;
        justify-content: space-between;
        margin: 1rem;
        /*width: 80%;*/
        @media only screen and (min-width: 480px) {
            /*width: 96%;*/
            margin: 2rem;
        }
        outline: none;

        * {
            outline: none;
        }

        .logo {
            font-family: 'Roboto', sans-serif;
            font-size: 2rem;
            color: #fff;
            background: #2f2f2f;
            height: 55px;
            width: 55px;
            padding: 1rem 0.5rem;
        }
    }

    // Settings
    // ==================================================
    $hamburger-padding-x: 15px !default;
    $hamburger-padding-y: 15px !default;
    $hamburger-layer-width: 40px !default;
    $hamburger-layer-height: 6px !default;
    $hamburger-layer-spacing: 6px !default;
    $hamburger-layer-color: #2f2f2f !default;
    $hamburger-layer-border-radius: 0 !default;
    $hamburger-hover-opacity: 0.8 !default;
    $hamburger-active-layer-color: $hamburger-layer-color !default;
    $hamburger-active-hover-opacity: $hamburger-hover-opacity !default;

    // To use CSS filters as the hover effect instead of opacity,
    // set $hamburger-hover-use-filter as true and
    // change the value of $hamburger-hover-filter accordingly.
    $hamburger-hover-use-filter: false !default;
    $hamburger-hover-filter: opacity(50%) !default;
    $hamburger-active-hover-filter: $hamburger-hover-filter !default;

    // Hamburger
    // ==================================================
    .hamburger {
        padding: $hamburger-padding-y $hamburger-padding-x;
        display: inline-block;
        cursor: pointer;

        transition-property: opacity, filter;
        transition-duration: 0.15s;
        transition-timing-function: linear;

        // Normalize (<button>)
        font: inherit;
        color: inherit;
        text-transform: none;
        background-color: transparent;
        border: 0;
        margin: 0;
        overflow: visible;

        &:hover {
            @if $hamburger-hover-use-filter == true {
                filter: $hamburger-hover-filter;
            } @else {
                opacity: $hamburger-hover-opacity;
            }
        }

        &.is-active {
            &:hover {
                @if $hamburger-hover-use-filter == true {
                    filter: $hamburger-active-hover-filter;
                } @else {
                    opacity: $hamburger-active-hover-opacity;
                }
            }

            .hamburger-inner,
            .hamburger-inner::before,
            .hamburger-inner::after {
                background-color: $hamburger-active-layer-color;
            }
        }
    }

    .hamburger-box {
        width: $hamburger-layer-width;
        height: $hamburger-layer-height * 3 + $hamburger-layer-spacing * 2;
        display: inline-block;
        position: relative;
    }

    .hamburger-inner {
        display: block;
        top: 50%;
        margin-top: $hamburger-layer-height / -2;

        &,
        &::before,
        &::after {
            width: $hamburger-layer-width;
            height: $hamburger-layer-height;
            background-color: $hamburger-layer-color;
            border-radius: $hamburger-layer-border-radius;
            position: absolute;
            transition-property: transform;
            transition-duration: 0.15s;
            transition-timing-function: ease;
        }

        &::before,
        &::after {
            content: "";
            display: block;
        }

        &::before {
            top: ($hamburger-layer-spacing + $hamburger-layer-height) * -1;
        }

        &::after {
            bottom: ($hamburger-layer-spacing + $hamburger-layer-height) * -1;
        }
    }

    .hamburger--minus {
        .hamburger-inner {
            &::before,
            &::after {
                transition: bottom 0.08s 0s ease-out,
                top 0.08s 0s ease-out,
                opacity 0s linear;
            }
        }

        &.is-active {
            .hamburger-inner {
                &::before,
                &::after {
                    opacity: 0;
                    transition: bottom 0.08s ease-out,
                    top 0.08s ease-out,
                    opacity 0s 0.08s linear;
                }

                &::before {
                    top: 0;
                }

                &::after {
                    bottom: 0;
                }
            }
        }
    }
</style>
