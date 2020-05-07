<template>
    <div id="index" class="relative overflow-hidden">
        <div class="relative">
            <div id="scroll-top-trigger" />
            <div id="about-us-trigger" class="absolute-l-t all-full"></div>
            <div id="about-us-pin" class="absolute-l-t all-full"></div>

            <SectionMain />
            <SectionAbout id="about" />
            <SectionService id="services" />
        </div>
    </div>
</template>

<script>
import SectionMain from '../components/main/SectionMain.vue';
import SectionService from '../components/services/SectionService.vue';
import SectionAbout from '../components/about/SectionAbout.vue';
export default {
    layout: 'main',
    components: { SectionAbout, SectionService, SectionMain }
};
</script>
