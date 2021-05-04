<template>
    <div
        class="Navbar bg-black h-10 w-screen fixed flex flex-row items-center justify-center md:h-20"
    >
        <div
            class="Navbar__linksContainer hidden md:flex flex-row items-center justify-around"
        >
            <a
                href="#proyecto"
                v-smooth-scroll="{
                    duration: 2000,
                    offset: -100
                }"
                class="Navbar__link text-white"
                >/ Gii Studio</a
            >

            <a
                href="#video"
                v-smooth-scroll="{ duration: 2000 }"
                class="Navbar__link text-white"
                >/ Video</a
            >
            <a
                href="#foto"
                v-smooth-scroll="{
                    duration: 2000,
                    offset: -100
                }"
                class="Navbar__link text-white"
                >/ Foto</a
            >
            <a
                href="#audio"
                v-smooth-scroll="{
                    duration: 2000,
                    offset: -100
                }"
                class="Navbar__link text-white"
                >/ Audio</a
            >
            <a
                href="#servicios"
                v-smooth-scroll="{
                    duration: 2000,
                    offset: -100
                }"
                class="Navbar__link text-white"
                >/ Servicios</a
            >
            <a
                href="#crew"
                v-smooth-scroll="{
                    duration: 2000,
                    offset: -100
                }"
                class="Navbar__link text-white"
                >/ Crew</a
            >

            <a
                href="#store"
                v-smooth-scroll="{ duration: 2000, offset: -100 }"
                class="Navbar__link text-white"
                >/ Gii Store</a
            >
            <a
                href="#galeria"
                v-smooth-scroll="{ duration: 2000, offset: -100 }"
                class="Navbar__link text-white"
                >/ Galería de Arte</a
            >
            <a
                href="#contacto"
                v-smooth-scroll="{ duration: 2000 }"
                class="Navbar__link text-white"
                >/ Contacto</a
            >
        </div>
        <div class="flex flex-row justify-end w-screen pr-5 md:hidden ">
            <button
                class="Navbar__menu text-black border bg-white rounded-full w-20 h-6 flex justify-center items-center "
            >
                = Menú
            </button>
        </div>
    </div>
</template>

<style lang="scss">
.Navbar {
    z-index: 2;
    &__linksContainer {
        width: 80%;
    }
    &__link {
        display: inline-block;
    }
    &__link::after {
        content: "";
        width: 0px;
        height: 1px;
        display: block;
        background: white;
        transition: 500ms;
    }
    &__link:hover::after {
        width: 100%;
    }
    &__menu {
        font-family: Spartan;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
    }
}
</style>
