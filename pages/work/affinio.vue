<template>
    <main>
        <h1>Affinio</h1>

     <div class="workGrid">
         <div>
             <h2>Info here</h2>
         </div>
         <div class="image" style="background-image: url('/images/work/affinio-full.png');"></div>
     </div>

    </main>
</template>


<style lang="scss" scoped>
    main {
        width: 80vw;
        margin: 2rem;
        @media only screen and (min-width: 480px) {
            width: 50vw;
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
        .workGrid {
            display: flex;
            justify-content: space-between;
            .image {
                width: 100%;
                height: 100vh;
                background-position: center;
                background-size: contain;
                background-repeat: no-repeat;
            }
            div {
                width: 100%;
            }

        }
    }
</style>
