<template>
    <div class="pt-70px md:pt-0">
        <div class="section-lawyer__title py-100px lg:pt-250px lg:pb-70px">
            <PageTitle>Проектный юрист</PageTitle>
        </div>
        <div class="bg-#161616 text-white">
            <div class="bg-#125FA8 py-30px text-white">
                <div class="container">
                    <p class="text-justify">
                        «Проектный юрист» – это аналог штатного юриста на более
                        выгодных и эффективных условиях. Эта услуга позволит Вам
                        иметь на территории Вашей компании квалифицированного
                        юриста на постоянной основе, который выступает
                        посредником в коммуникациях между Вашей компанией и
                        нашей юридической фирмой.
                    </p>
                </div>
            </div>
            <div class="px-15px md:px-0">
                <div class="container-custom">
                    <div
                        class="bg-white rounded-5 py-103px md:pt-103px md:pb-0 mt-44px md:flex"
                    >
                        <div
                            v-for="(item, index) in lawyerInfo"
                            :key="index"
                            class="md:w-1/3 md:mb-103px md:border-r md:border-#BFBFBF md:last:border-0 wow flipInY"
                            data-wow-offset="170"
                        >
                            <img
                                class="mx-auto block h-94px"
                                :src="getUrl(item.img)"
                            />
                            <div
                                class="pt-30px px-42px text-justify text-14px font-lato text-accent-gray"
                            >
                                {{ item.text }}
                            </div>
                            <div
                                v-if="index + 1 !== lawyerInfo.length"
                                class="my-30px bg-#BFBFBF h-1px w-8/12 mx-auto md:hidden"
                            ></div>
                        </div>
                    </div>

                    <div id="scroll-top-trigger" />
                    <div
                        class="text-center py-50px font-raleway uppercase font-black text-24px md:text-36px "
                    >
                        Плюсы “Проектного юриста”
                    </div>

                    <div class="md:hidden">
                        <div
                            v-for="(item, index) in lawyerAdvantages"
                            :key="index"
                            class="lawyer-advantages last:mb-0 font-lato relative"
                        >
                            <div class="lawyer-num absolute-x">
                                {{ index + 1 }}
                            </div>
                            {{ item }}
                        </div>
                    </div>

                    <div class="hidden md:flex font-lato">
                        <div class="w-1/3">
                            <div
                                class="lawyer-advantages h-111px mb-20px relative wow fadeInLeft"
                                data-wow-offset="150"
                            >
                                <div class="lawyer-num">
                                    1
                                </div>
                                {{ lawyerAdvantages[3] }}
                            </div>
                            <div
                                class="lawyer-advantages h-162px relative wow fadeInLeft"
                                data-wow-offset="150"
                            >
                                <div class="lawyer-num">
                                    4
                                </div>
                                {{ lawyerAdvantages[4] }}
                            </div>
                        </div>

                        <div class="w-1/3 mx-20px">
                            <div
                                class="lawyer-advantages h-179px relative mt-30px wow fadeIn"
                                data-wow-offset="150"
                            >
                                <div class="lawyer-num">
                                    2
                                </div>
                                {{ lawyerAdvantages[2] }}
                            </div>
                        </div>

                        <div class="w-1/3">
                            <div
                                class="lawyer-advantages mb-20px h-111px relative wow fadeInRight"
                                data-wow-offset="150"
                            >
                                <div class="lawyer-num">
                                    3
                                </div>
                                {{ lawyerAdvantages[0] }}
                            </div>
                            <div
                                class="lawyer-advantages h-162px relative wow fadeInRight"
                                data-wow-offset="150"
                            >
                                <div class="lawyer-num">
                                    5
                                </div>
                                {{ lawyerAdvantages[1] }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="h-282px my-50px  md:hidden  w-full">
                    <LazyImage url="lawyer-team.jpg" device="mobile" />
                </div>

                <div class="container-custom font-lato">
                    <div class="hidden my-50px md:block h-412px w-full">
                        <LazyImage url="lawyer-team-big.jpg" />
                    </div>

                    <div class="text-14px md:text-18px px-15px pb-80px">
                        <div
                            v-for="(item, index) in lawyerFooter"
                            :key="index"
                            class="mt-3 text-justify"
                        >
                            {{ item }}
                        </div>
                    </div>

                    <div class="text-center">
                        <div @click="toggleModal">
                            <button
                                class="button button-gradient bg-light-blue border-light-blue max-w-245px md:max-w-332px h-70px"
                            >
                                Получить бесплатную <br />
                                консультацию
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import PageTitle from '../components/PageTitle.vue';
import LazyImage from '../components/lazy-image/LazyImage.vue';
export default {
    components: { LazyImage, PageTitle },
    data() {
        return {
            lawyerInfo: require('~/assets/json/lawyer-info'),
            lawyerAdvantages: require('~/assets/json/lawyer-advantages'),
            lawyerFooter: require('~/assets/json/lawyer-footer')
        };
    },
    methods: {
        getUrl(img) {
            return require('../assets/img/lawyer/' + img);
        },
        ...mapActions({
            toggleModal: 'callback/toggleModal'
        })
    }
};
</script>

<style lang="scss">
.section-lawyer {
    &__title {
        background-image: url('../assets/img/lawyer/lawyer-title-back.jpg');
    }
}

@media (max-width: 576px) {
    .section-lawyer {
        &__title {
            background-image: url('../assets/img/lawyer/laywer-title-mob.jpg');
        }
    }
}
</style>
