<template>
    <div class="service__data bg-#161616 text-white md:flex items-center ">
        <div class="md:w-45 2xl:w-47 relative">
            <img :src="imgPath" />
            <div class="absolute absolute-center w-full">
                <h2
                    class="md:hidden font-raleway font-semibold uppercase text-18px text-center mb-10px"
                >
                    {{ title }}
                </h2>
                <button
                    class="button button-gradient bg-light-blue border-light-blue max-w-230px md:max-w-273px 2xl:max-w-332px h-50px 2xl:h-70px"
                    @click="toggleModal"
                >
                    Стать клиентом
                </button>
            </div>
        </div>
        <div
            class="md:w-55 2xl:w-53 font-raleway flex flex-col justify-center py-25px md:py-10px px-20px 2xl:px-40px "
        >
            <h2 class="service-data-title hidden md:block">
                {{ title }}
            </h2>
            <div
                class="font-normal 2xl:font-medium font-raleway text-14px 2xl:text-16px mb-10px 2xl:mb-20px "
            >
                <p v-for="(text, index) in texts" :key="`text-${index + 1}`">
                    {{ text }}
                </p>
            </div>
            <div v-if="lists.length">
                <h2 class="service-data-title">Наш опыт:</h2>
                <ul>
                    <li
                        v-for="(list, index) in lists"
                        :key="`list-${index + 1}`"
                        class="text-justify font-normal text-14px 2xl:text-16px"
                    >
                        {{ list }}
                    </li>
                </ul>
            </div>
            <slot name="form"></slot>
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
        },
        texts: {
            type: Array,
            default: () => []
        },
        experienceTitle: {
            type: String,
            default: ''
        },
        lists: {
            type: Array,
            default: () => []
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
.service {
    &__data {
        border: 1px solid rgba(255, 255, 255, 0.1);
    }
}
</style>
