<template>
    <div
        class="font-open-sans text-#575757 font-normal text-14px 2xl:text-16px "
    >
        <div class="">
            <img :src="imgPath" class="hidden sm:block" />
            <img :src="imgPathMobile" class="sm:hidden" />
            <div class="article__data__lists p-20px 2xl:p-30px">
                <p
                    v-for="(list, index) in lists"
                    :key="index"
                    class="text-justify mb-10px 2xl:mb-15px"
                >
                    {{ list }}
                </p>
            </div>
        </div>

        <div class="bg-#125FA8 h-70px relative">
            <div
                class="article__data__time bg-white text-#125FA8 w-45px flex items-center justify-center absolute top-0 right-0 h-full"
            >
                <span
                    class="block transform -rotate-90 origin-center text-15px"
                    >{{ time }}</span
                >
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        time: {
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
        lists: {
            type: Array,
            default: () => []
        }
    }
};
</script>

<style lang="scss">
.article {
    &__data__lists,
    &__data__time {
        box-shadow: 10px 20px 50px rgba(0, 0, 0, 0.08);
    }
}
</style>
