<template>
    <div>
        <div
            class="bg-white w-full fixed z-50 flex h-70px text-14px leading-none text-white text-center"
        >
            <div class="bg-#04101B center-flex w-2/12" @click="toggleMenu()">
                <div class="burger" :class="{ checked: isChecked }">
                    <div
                        class="burger__inner dark-bg-white burger__inner--1"
                    ></div>
                    <div
                        class="burger__inner dark-bg-white burger__inner--2"
                    ></div>
                    <div
                        class="burger__inner dark-bg-white burger__inner--3"
                    ></div>
                </div>
            </div>
            <nuxt-link
                to="/"
                class="text-center mx-auto block center-flex w-3/12"
            >
                <img
                    class="w-full max-w-65px"
                    src="../../assets/img/logo.svg"
                />
            </nuxt-link>
            <div class="bg-main-blue center-flex w-3/12">
                <a href="contracts/contracts.zip" download class="text-center">
                    <img
                        class="block mx-auto"
                        src="../../assets/img/word-doc.svg"
                    />
                    Скачать шаблоны
                </a>
            </div>
            <div
                class="bg-light-blue center-flex w-4/12 cursor-pointer"
                @click="toggleModal"
            >
                Получить бесплатную <br />
                консультацию
            </div>
        </div>

        <div
            class="header-mobile z-20 w-full h-auto fixed flex flex-col bg-center pt-70px"
            :class="{ active: mobileMenuState }"
        >
            <Menu @onSelectItem="closeMenu" />
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import Menu from './Menu.vue';

export default {
    components: { Menu },
    data() {
        return {
            mobileMenuState: false,
            isChecked: false
        };
    },
    methods: {
        toggleMenu() {
            this.mobileMenuState = !this.mobileMenuState;
            this.isChecked = !this.isChecked;
        },
        closeMenu() {
            this.mobileMenuState = false;
            this.isChecked = false;
        },
        ...mapActions({
            toggleModal: 'callback/toggleModal'
        })
    }
};
</script>

<style lang="scss" scoped>
.header-mobile {
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.25);
    transform: translateY(-100%);
    transition: 0.4s all ease-in-out;
    &.active {
        transform: translateY(0);
    }
}
.header {
}

.burger {
    width: 27px;
    height: 22px;
    position: relative;
    transform: rotate(0deg);
    transition: 0.5s ease-in-out;
    cursor: pointer;
    &__inner {
        position: absolute;
        width: 27px;
        height: 3px;
        background-color: #fff;
        border-radius: 6px;
        margin-bottom: 5px;
        transform: rotate(0deg);
        transition: 0.25s ease-in-out;
        &--2 {
            top: 8px;
        }
        &--3 {
            top: 16px;
        }
    }
    &.checked {
        .burger__inner {
            &--1 {
                top: 6px;
                transform: rotate(135deg);
            }
            &--2 {
                opacity: 0;
            }
            &--3 {
                top: 6px;
                transform: rotate(-135deg);
            }
        }
    }
}
</style>
