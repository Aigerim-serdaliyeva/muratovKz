<template>
    <div class="">
        <div
            class="section-career__title bg-cover bg-no-repeat pt-120px pb-100px mb-5px"
        >
            <PageTitle class="wow bounceInDown">Карьера</PageTitle>
        </div>
        <div class="lg:flex">
            <Career
                v-for="(career, index) in careers"
                :key="career"
                :img-path="require(`../../assets/img/career-${index + 1}.jpg`)"
                :img-path-mobile="
                    require(`../../assets/img/career-mob-${index + 1}.jpg`)
                "
                :career="career"
                :details="careersDetails[index]"
                class="mx-auto last:mt-10px lg:last:mt-0"
            />
        </div>
    </div>
</template>

<script>
import PageTitle from '../../components/PageTitle.vue';
import Career from '../../components/career/Career.vue';
export default {
    components: { Career, PageTitle },
    data() {
        return {
            careersDetails: require('../../assets/json/careers.json'),
            careers: ['Менеджер по продажам юридических услуг', 'Ведущий Юрист']
        };
    }
};
</script>

<style lang="scss">
.section-career {
    &__title {
        background-image: url('../../assets/img/career-title-back.jpg');
        background-position: center center;
    }
}
</style>
