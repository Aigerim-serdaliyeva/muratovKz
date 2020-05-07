<template>
    <a
        href="tel:+77272777606"
        class="call cursor-pointer fixed rounded-full flex justify-center items-center w-60px h-60px bg-light-blue right-20px bottom-30px z-20 sm:hidden"
    >
        <img src="../assets/img/call.png" />
    </a>
</template>

<script>
export default {
    methods: {
        pageTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
};
</script>

<style lang="scss">
.call {
    box-shadow: 0px 4px 80px rgba(0, 0, 0, 0.2);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-animation: trambling-animation 1.5s ease-in-out 1s infinite;
    animation: trambling-animation 1.5s ease-in-out 1s infinite;
}
</style>
