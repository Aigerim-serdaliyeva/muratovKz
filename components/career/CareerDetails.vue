<template>
    <div
        class="wow fadeIn font-raleway text-white max-w-350px sm:max-w-550px w-full mx-auto text-13px 2xl:text-14px bg-#125FA8
        rounded-2 flex flex-col px-15px py-20px 2xl:px-20px 2xl:py-30px mb-35px absolute"
    >
        <img
            class="absolute top-10px right-10px cursor-pointer"
            src="../../assets/img/close.svg"
            @click="$emit('close')"
        />
        <h3 class="font-bold text-16px 2xl:text-18px">{{ careerTitle }}</h3>
        <div class="mb-10px 2xl:mb-15px font-medium">
            <p v-for="(text, index) in careerTexts" :key="`text-${index + 1}`">
                {{ text }}
            </p>
        </div>
        <div
            v-for="(item, index) in careerLists"
            :key="`item-${index}`"
            class="mb-15px font-normal"
        >
            <div>{{ item.subtitle }}</div>
            <ul v-for="(list, i) in item.list" :key="`list-${i + 1}`">
                <li>{{ list }}</li>
            </ul>
        </div>
        <div class="flex-grow"></div>
        <button class="button bg-white text-#125FA8">Отправить резюме</button>
    </div>
</template>

<script>
import Button from '../Button.vue';
export default {
    components: { Button },
    props: {
        careerTitle: {
            type: String,
            default: ''
        },
        careerTexts: {
            type: Array,
            default: () => []
        },
        careerSubTitle: {
            type: String,
            default: ''
        },
        careerLists: {
            type: Array,
            default: () => []
        }
    }
};
</script>
