<template>
    <section id="audio" class="SeccAudio bg-black pb-40">
        <h1 class=" text-white ml-5 mb-10">/ Audio</h1>
        <div class="flex flex-col justify-around items-center md:flex-row">
            <img
                class="SeccAudio__img mb-5"
                src="@/assets/images/audio/instinto.jpg"
            />
            <div>
                <h1 class="SeccAudio__titulo text-white text-center mb-10">
                    Escúchala en todas las plataformas digitales
                </h1>
                <div
                    class="flex flex-col justify-center items-center md:flex-row"
                >
                    <a
                        href="https://www.youtube.com/watch?v=F5xArRmn2dc"
                        target="_blank"
                        ><svg
                            style="width:60px;height:60px"
                            class="-mt-5 mr-5"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="white"
                                d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z"
                            /></svg
                    ></a>
                    <a
                        href="https://music.apple.com/mx/album/instinto/1553072203?i=1553072206&l=en"
                        target="_blank"
                    >
                        <img
                            class="SeccAudio__logo mb-5 mr-5"
                            src="@/assets/images/icons/apple.svg"
                    /></a>
                    <a
                        class="cursor_pointer"
                        href="spotify:track:3EnA1E8ZXgQZyQyJhPVvP3"
                        target="_blank"
                    >
                        <img
                            class="SeccAudio__logo mb-5 mr-5"
                            src="@/assets/images/icons/spotify.png"
                    /></a>
                    <a
                        href="https://deezer.page.link/FSMeDaY8dZGrcJgy7"
                        target="_blank"
                    >
                        <img
                            class="SeccAudio__logo mb-5 mr-5"
                            src="@/assets/images/icons/deezer.svg"
                    /></a>
                    <a
                        href="https://music.amazon.com/albums/B08WCX5NQ5?trackAsin=B08WD1TF4Q&do=play&ref=dm_ws_dp_sp_bb_phfs_xx_xx_xx"
                        target="_blank"
                    >
                        <img
                            class="SeccAudio__logo mb-5 mr-5"
                            src="@/assets/images/icons/amazon.png"
                    /></a>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss">
.SeccAudio {
    padding-top: 8rem;
    &__img {
        width: 500px;
    }
    &__titulo {
        font-size: 1.5rem;
    }
    &__logo {
        height: 40px;
    }
}
</style>
