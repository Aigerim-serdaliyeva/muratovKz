<template>
    <div class="flex flex-col-reverse md:flex-row">
        <div class="md:w-45 2xl:w-47">
            <img src="../../assets/img/about-back.jpg" />
        </div>
        <div
            class="bg-#161616 flex flex-col justify-center py-70px md:py-0 md:w-55 2xl:w-53"
        >
            <h2
                class="section-about__title font-open-sans leading-none text-white font-extrabold text-50px md:text-55px 2xl:text-64px mb-35px "
            >
                <span class="bg-#161616 px-5px ml-25px md:ml-45px">О НАС</span>
            </h2>
            <About
                v-for="list in lists"
                :key="list.title"
                :title="list.title"
                :text="list.text"
                class="mx-15px md:ml-60px wow slideInRight"
            />
            <div class="md:hidden text-white text-center mt-60px px-15px">
                <div class="mb-50px wow fadeInUp">
                    <img
                        src="../../assets/img/logo-white.svg"
                        class="block mx-auto mb-20px"
                    />
                    <p>
                        Компания была реорганизована в 2018 году из компании ТОО
                        «Muratov Company Law Firm» в ТОО "Юридическая компания
                        "Muratov Partners"
                    </p>
                </div>
                <div class="wow fadeInUp">
                    <img
                        src="../../assets/img/trademark.svg"
                        class="block mx-auto mb-20px"
                    />
                    <p>
                        Товарный знак «Muratov Partners» зарегистрирован в 2019
                        году
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import About from './About.vue';
export default {
    components: { About },
    data() {
        return {
            lists: require('../../assets/json/about-us')
        };
    }
};
</script>

<style lang="scss">
.section-about {
    &__title {
        position: relative;
        z-index: 1;
        &::before {
            content: '';
            position: absolute;
            background: #125fa8;
            height: 45px;
            width: 100%;
            top: 50%;
            transform: translateY(-50%);
            left: 0;
            z-index: -1;
        }
    }
}
</style>
