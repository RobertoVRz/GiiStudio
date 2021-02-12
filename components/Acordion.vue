<template>
    <div class="Acordion">
        <div class="Acordion__header flex flex-col items-center">
            <h1 :class="active == true ? 'Acordion--active' : ''">
                {{ name }}
            </h1>
            <transition name="slide-fade">
                <div class="Acordion__body mb-3" v-if="active">
                    <p class="Acordion__text mt-3">{{ puesto }}</p>
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
    &__title {
        font-family: Myriad Pro;
        font-style: normal;
        font-weight: normal;
        font-size: 23px;
        line-height: 28px;
    }
    &--active {
        font-family: Myriad Pro;
        font-style: normal;
        font-weight: 600;
        font-size: 30px;
        line-height: 36px;
        color: white;
        @include screen(landscape) {
            font-size: 35px;
            line-height: 42px;
        }
    }
    &--activeText {
        font-family: Myriad Pro;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 30px;
        color: white;
        @include screen(landscape) {
            font-size: 18px;
        }
    }
    &--hide {
        //transform: rotate(180deg);
        visibility: hidden;
    }
    .slide-fade-enter-active,
    .slide-fade-leave-active {
        transition: all 0.18s ease;
    }
    .slide-fade-enter,
    .slide-fade-leave-to {
        transform: translateY(-20px);
        opacity: 0;
    }
}
</style>
