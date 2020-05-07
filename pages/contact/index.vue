<template>
    <div class="pt-70px md:pt-0">
        <div class="section-title__back pt-120px pb-100px mb-5px">
            <PageTitle class="wow bounceInDown">Наши контакты</PageTitle>
        </div>
        <div class="bg-#161616">
            <div class="container">
                <div class="-mx-15px sm:mx-0">
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A21d109e73304b2cce3ac66cbca1fe4ed42c10c3452019c82bcfefc76c7ec8c2d&amp;source=constructor"
                        width="100%"
                        height="470"
                        frameborder="0"
                    ></iframe>
                    <ContactData />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ContactData from '../../components/contact/ContactData.vue';
import PageTitle from '../../components/PageTitle.vue';
export default {
    components: { PageTitle, ContactData }
};
</script>

<style lang="scss"></style>
