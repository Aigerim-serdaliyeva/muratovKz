<template>
    <div class="text-white font-open-sans mb-20px 2xl:mb-30px last:mb-0">
        <h4 class="font-bold text-22px 2xl:text-24px mb-5px">{{ title }}</h4>
        <p class="font-normal text-#CCCCCC text-14px 2xl:text-16px">
            {{ text }}
        </p>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: ''
        }
    }
};
</script>
