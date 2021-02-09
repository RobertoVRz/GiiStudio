<template>
    <div
        class="Navbar bg-black h-20 w-screen fixed flex flex-row items-center justify-between"
    >
    <div class="Navbar__linksContainer hidden md:flex flex-row items-center justify-around">
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
            href="#crew"
            v-smooth-scroll="{ duration: 2000}"
            class="Navbar__link text-white"
            >/ Crew</a
        >
        <a
            href="#servicios"
            v-smooth-scroll="{ duration: 2000 }"
            class="Navbar__link text-white"
            >/ Servicios</a
        >
        <a
            href="#foto"
            v-smooth-scroll="{ duration: 2000 }"
            class="Navbar__link text-white"
            >/ Foto</a
        >
        <a
            href="#video"
            v-smooth-scroll="{ duration: 2000 }"
            class="Navbar__link text-white"
            >/ Video</a
        >
        <a
            href="#galeria"
            v-smooth-scroll="{ duration: 2000 }"
            class="Navbar__link text-white"
            >/ Galeria</a
        >
        <a
            href="#"
            v-smooth-scroll="{ duration: 2000 }"
            class="Navbar__link text-white"
            >/ Gii Store</a
        >
        <a
            href="#contacto"
            v-smooth-scroll="{ duration: 2000 }"
            class="Navbar__link text-white"
            >/ Contacto</a
        >
    </div>
        <div>
            <a href="#contacto" class="Navbar__link text-white">/ contacto</a>
        </div>
    </div>
</template>

<style lang="scss">
.Navbar {
    z-index: 2;
    &__linksContainer{
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
}
</style>
