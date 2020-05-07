<template>
    <div class="fixed bottom-0 right-0 w-full flex justify-end">
        <div
            class="relative w-126px md:w-348px md:cursor-pointer"
            @click="scroll"
        >
            <div
                class="absolute bottom-0 right-0 z-10 h-44px md:h-100px w-full bg-accent-blue"
            ></div>
            <div
                class="absolute bottom-0 left-0 right-0 m-auto z-20 bg-main-light-blue flex justify-center items-center h-85px w-61px md:h-141px md:w-100px"
            >
                <img src="~/assets/images/scroll-to-top.svg" alt="" />
            </div>
            <div
                class="absolute right-95% z-20 bottom-10px bg-#6DC4FF h-11px w-24px md:w-80px md:h-30px"
            ></div>
            <div
                class="absolute right-95% z-20 bottom-50px bg-main-dark-blue h-5px w-11px md:h-20px md:w-44px"
            ></div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        scroll() {
            this.$scrollTo('body');
        }
    }
};
</script>
