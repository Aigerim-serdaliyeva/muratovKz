<template>
    <div class="text-white leading-tight flex">
        <div class="flex w-45 2xl:w-47">
            <div
                class="bg-white center-flex flex-shrink-0 w-170px 2xl:w-200px h-120px 2xl:h-150px"
            >
                <nuxt-link to="/">
                    <img
                        class="w-full max-w-110px 2xl:max-w-none"
                        src="../../assets/img/logo.svg"
                    />
                </nuxt-link>
            </div>
            <Menu />
        </div>
        <div class="flex w-55 2xl:w-53">
            <div class="bg-accent-blue header-div w-40 hidden md:flex">
                <span
                    class="font-bold header__dogovor xl:mr-5px 2xl:mr-12px text-30px 2xl:text-40px"
                    >ТОП-5</span
                >
                <span
                    >шаблонов договоров <br />
                    для Вашего бизнеса</span
                >
            </div>
            <div class="bg-main-blue header-div w-30">
                <a href="contracts/contracts.zip" download class="flex">
                    Скачать шаблоны
                    <img class="ml-10px" src="../../assets/img/word-doc.svg" />
                </a>
            </div>
            <div
                class="bg-light-blue header-div w-30 cursor-pointer"
                @click="toggleModal"
            >
                Получить бесплатную <br />
                консультацию
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import Menu from './Menu.vue';
export default {
    components: { Menu },
    methods: {
        ...mapActions({
            toggleModal: 'callback/toggleModal'
        })
    }
};
</script>

<style lang="scss">
.header {
    &__dogovor {
        position: relative;
        padding-right: 12px;
        &::after {
            content: '';
            position: absolute;
            height: 30px;
            width: 1px;
            background: #fff;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
        }
    }
}

@media (max-width: 1450px) {
    .header {
        &__dogovor {
            padding-right: 5px;
        }
    }
}
</style>
