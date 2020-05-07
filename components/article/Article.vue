<template>
    <div class="article relative text-white leading-none">
        <img :src="imgPath" />
        <button
            class="article__button button mb-15px absolute absolute-center md:opacity-0 md:h-0"
            @click="$emit('details')"
        >
            Подробнее
        </button>
        <div class="absolute bottom-0 left-0">
            <h3
                class="font-raleway uppercase font-normal px-8px md:px-15px 2xl:px-25px mb-5px text-16px 2xl:text-20px"
            >
                {{ title }}
            </h3>
            <div class="font-lato flex text-13px md:text-14px 2xl:text-16px">
                <p
                    class="bg-#125FA8 px-8px md:px-15px 2xl:px-25px py-10px 2xl:py-15px"
                >
                    {{ text }}
                </p>
                <div
                    class="bg-white text-#125FA8 w-45px flex items-center justify-center"
                >
                    <span
                        class="block transform -rotate-90 origin-center text-14px 2xl:text-15px"
                        >{{ time }}</span
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        imgPath: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: ''
        },
        time: {
            type: String,
            default: ''
        }
    }
};
</script>

<style lang="scss">
.article {
    &__button {
        transition: ease-out 0.5s;
    }

    &:hover,
    &:active {
        .article__button {
            height: 60px;
            opacity: 1;
        }
    }
}
</style>
