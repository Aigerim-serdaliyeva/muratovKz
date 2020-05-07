<template>
    <div class="main-menu w-full leading-none flex flex-wrap">
        <li
            v-for="(link, index) in links"
            :key="`link-${index + 1}`"
            class=" list-none bg-#04101B opacity-95 w-full md:w-6/12 h-40px 2xl:h-50px text-15px 2xl:text-16px"
            @click="select"
        >
            <nuxt-link
                :to="{ path: link.to, hash: link.hash }"
                active-class="active"
                exact
                class="main-menu__link font-lato text-white block px-10px h-full w-full flex items-center justify-center"
            >
                <span> {{ link.text }}</span>
            </nuxt-link>
        </li>
    </div>
</template>

<script>
export default {
    data() {
        return {
            links: require('@/assets/json/menu')
        };
    },
    methods: {
        select() {
            this.$emit('onSelectItem');
        },
        navigate(path) {
            const hashIndex = path.indexOf('#');

            if (hashIndex >= 0) {
                setTimeout(() => {
                    this.$scrollTo(path.slice(hashIndex));
                }, 500);
            }
        }
    }
};
</script>

<style lang="scss">
.main-menu {
    &__link {
        border: 0.2px solid rgba(255, 255, 255, 0.1);
        &.active,
        &:hover {
            background: radial-gradient(
                50% 280.65% at 50% 50%,
                #00386c 0%,
                #04101b 100%
            );
        }
    }
}
</style>
