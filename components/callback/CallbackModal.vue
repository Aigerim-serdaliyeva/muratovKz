<template>
    <div
        v-if="isActive"
        class=" z-50 fixed left-0 top-0 w-full h-screen flex items-center justify-center"
    >
        <div class="z-10 absolute-l-t all-full bg"></div>
        <div
            class="relative z-20 rounded-5 w-829px bg-white py-50px px-10px mx-15px md:py-93px md:px-119px "
        >
            <div
                class="absolute top-0 right-0 p-5 cursor-pointer"
                @click="toggleModal"
            >
                <img src="~/assets/img/close.svg" alt="" />
            </div>
            <Callback />
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Callback from './Callback.vue';
export default {
    components: { Callback },
    computed: {
        ...mapState({
            isActive: ({ callback }) => callback.isActive
        })
    },
    methods: {
        ...mapActions({
            toggleModal: 'callback/toggleModal'
        })
    }
};
</script>

<style scoped>
.bg {
    background: rgba(0, 0, 0, 0.5);
}
</style>
