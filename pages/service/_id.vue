<template>
    <div class="pt-70px md:pt-0">
        <div class="section-title__back py-110px mb-5px">
            <nuxt-link to="/#services">
                <button class="button button-border max-w-400px">
                    Другие услуги
                </button>
            </nuxt-link>
        </div>
        <div>
            <ServiceData
                :title="getServiceInfo.title"
                :img-path="
                    require(`../../assets/img/service/service-data-${id +
                        1}.jpg`)
                "
                :texts="getServiceInfo.texts"
                :experience-title="getServiceInfo.experienceTitle"
                :lists="getServiceInfo.lists"
                :button-name="getServiceInfo.button"
            >
                <template v-slot:form>
                    <div v-if="id === 5">
                        <div class="service-data-title text-center">
                            Другие услуги
                        </div>
                        <p
                            class="mb-20px font-medium font-raleway text-15px 2xl:text-16px text-center"
                        >
                            Заполните форму для получения консультации. Мы с
                            Вами свяжемся <br />
                            в удобное для Вас время
                        </p>
                        <Callback
                            :is-bg-dark-input="true"
                            :is-text-white="true"
                        />
                    </div>
                </template>
            </ServiceData>
        </div>
    </div>
</template>

<script>
import Callback from '../../components/callback/Callback.vue';
import ServiceData from '../../components/services/ServiceData.vue';
export default {
    components: { ServiceData, Callback },
    data() {
        return {
            servicesData: require('../../assets/json/services-data.json')
        };
    },

    computed: {
        getServiceInfo() {
            return this.servicesData[this.$route.params.id];
        },
        id() {
            return Number(this.$route.params.id);
        }
    }
};
</script>

<style lang="scss"></style>
