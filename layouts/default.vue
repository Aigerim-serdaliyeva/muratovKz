<template>
    <div class="relative">
        <div id="menu-mobile-trigger" />
        <CallbackModal />
        <TheCall />
        <!-- <notifications group="fileupload" position="top center" /> -->
        <ErrorBoundary>
            <Header class="hidden md:flex" />
            <HeaderMobile class="md:hidden top-0" />
            <nuxt />
            <Footer />
        </ErrorBoundary>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import TheCall from '../components/TheCall.vue';
import HeaderMobile from '../components/header/HeaderMobile.vue';
import Footer from '../components/footer/Footer.vue';
import Header from '../components/header/Header.vue';
import CallbackModal from '../components/callback/CallbackModal.vue';
import ErrorBoundary from '../components/error-boundary/ErrorBoundary.vue';
export default {
    components: {
        ErrorBoundary,
        CallbackModal,
        Header,
        Footer,
        HeaderMobile,
        TheCall
    },
    data() {
        return {
            isActive: false
        };
    },
    computed: {
        ...mapState({})
    },
    mounted() {},
    methods: {
        ...mapActions({})
    }
};
</script>
