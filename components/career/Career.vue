<template>
    <div class="relative">
        <img :src="imgPath" class="mx-auto hidden sm:block" />
        <img :src="imgPathMobile" class="mx-auto sm:hidden" />
        <div
            class="absolute absolute-center text-white leading-tight max-w-320px w-full sm:w-auto wow fadeIn"
        >
            <h4
                class="font-raleway uppercase text-center text-20px 2xl:text-24px mb-20px"
            >
                {{ career }}
            </h4>
            <button class="button mb-15px" @click="isOpen = true">
                Подробнее
            </button>
        </div>
        <CareerDetails
            v-if="isOpen"
            :career-title="details.title"
            :career-texts="details.text"
            :career-lists="details.lists"
            class="absolute absolute-center"
            @close="isOpen = false"
        />
    </div>
</template>

<script>
import CareerDetails from './CareerDetails.vue';
export default {
    components: { CareerDetails },
    props: {
        career: {
            type: String,
            default: ''
        },
        imgPath: {
            type: String,
            default: ''
        },
        imgPathMobile: {
            type: String,
            default: ''
        },
        details: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {
            isOpen: false
        };
    }
};
</script>
