<template>
    <div class="service relative text-white font-open-sans cursor-pointer">
        <img :src="imgPath" />
        <div class="absolute absolute-center w-full max-w-350px">
            <h3
                class="font-semibold font-open-sans text-center uppercase text-18px md:text-20px 2xl:text-24px mb-15px"
                v-html="title"
            ></h3>
            <div class="service__buttons md:h-0 md:opacity-0">
                <button
                    class="button button-border mb-15px"
                    @click="$emit('details')"
                >
                    Подробнее
                </button>
                <button
                    class="button bg-light-blue border-light-blue button-gradient"
                    @click="toggleModal"
                >
                    Получить бесплатную <br />
                    консультацию
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        imgPath: {
            type: String,
            default: ''
        }
    },
    methods: {
        ...mapActions({
            toggleModal: 'callback/toggleModal'
        })
    }
};
</script>

<style lang="scss">
.button-border {
    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
}
.service {
    &__buttons {
        transition: all 0.6s;
    }
    &:hover,
    &:active {
        .service__buttons {
            opacity: 1;
            height: 138px;
        }
    }
}
</style>
