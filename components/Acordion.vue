<template>
    <div class="Acordion pr-3">
        <div class="Acordion__header flex flex-col items-start ml-10">
            <h1
                class="Acordion__title"
                :class="
                    active !== true
                        ? 'Acordion__title--noActive'
                        : 'Acordion--active my-5'
                "
            >
                {{ name }}
            </h1>
            <transition name="slide-fade">
                <div class="Acordion__body ml-5 mb-3" v-if="active">
                    <p>{{ puesto }}</p>
                    <p
                        class="Acordion__text mt-3"
                        v-html="bio"
                        :class="active == true ? 'Acordion--activeText' : ''"
                    ></p>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        puesto: {
            type: String,
            required: true
        },
        bio: {
            type: String,
            required: true
        },
        active: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    data() {
        return {
            showInfo: false
            //-iconShow: true,
        };
    },
    methods: {
        ver() {
            this.showInfo = !this.showInfo;
            //-this.iconShow = !this.iconShow;
        }
    }
};
</script>
<style lang="scss">
@import "@/assets/sass/app.scss";
.Acordion {
    @include screen(tablet) {
        width: 576px;
    }
    &__title {
        //font-family: Myriad Pro;
        font-style: normal;
        font-weight: normal;
        font-size: 23px;
        line-height: 28px;
        @include screen(tablet) {
            font-size: 36px;
            line-height: 40px;
        }
        &--noActive {
            font-size: 20px;
            line-height: 15px;
            margin-left: -1rem;
        }
        &--noActive:hover {
            letter-spacing: 1px;
            transition: 500ms;
        }
    }
    &__title::after {
        content: "";
        width: 0px;
        height: 1px;
        display: block;
        background: white;
        transition: 500ms;
    }
    &__title:hover::after {
        width: 100%;
    }
    &--active::after {
        width: 100%;
    }
    &--hide {
        //transform: rotate(180deg);
        visibility: hidden;
    }
    .slide-fade-enter-active,
    .slide-fade-leave-active {
        transition: all 0.3s ease;
    }
    .slide-fade-enter,
    .slide-fade-leave-to {
        transform: translateY(-20px);
        opacity: 0;
    }
}
</style>
