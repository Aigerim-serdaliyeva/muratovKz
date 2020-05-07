<template>
    <div>
        <h2
            class="section-service__title font-open-sans leading-none text-white font-extrabold bg-#161616 text-center uppercase opacity-95 text-50px md:text-55px 2xl:text-64px py-10px"
        >
            Наши услуги
        </h2>
        <div class="flex flex-wrap">
            <Service
                v-for="(service, index) in services"
                :key="service.title"
                :title="service.title"
                :img-path="
                    require(`../../assets/img/service/service-${index + 1}.jpg`)
                "
                class="w-full sm:w-6/12 lg:w-4/12 wow fadeInUp"
                @details="goTo(index)"
            />
        </div>
    </div>
</template>

<script>
import Service from './Service.vue';
export default {
    components: { Service },
    data() {
        return {
            services: require('../../assets/json/services')
        };
    },
    methods: {
        goTo(index) {
            this.$router.push('/service/' + index);
        }
    }
};
</script>

<style lang="scss">
.section-service {
    &__title {
        position: relative;
        box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.08);
        &::before {
            content: '';
            position: absolute;
            background-color: #125fa8;
            width: 30%;
            height: 100%;
            left: 0;
            top: 0;
        }
    }
}

@media (max-width: 1200px) {
    .section-service {
        &__title {
            &::before {
                width: 25%;
            }
        }
    }
}

@media (max-width: 991px) {
    .section-service {
        &__title {
            &::before {
                width: 17%;
            }
        }
    }
}

@media (max-width: 580px) {
    .section-service {
        &__title {
            &::before {
                width: 10%;
            }
        }
    }
}
</style>
