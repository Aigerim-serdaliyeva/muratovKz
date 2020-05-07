<template>
    <div class="pt-70px md:pt-0">
        <div
            class="section-article__title py-100px md:pt-120px md:pb-100px mb-5px"
        >
            <PageTitle class="wow bounceInDown">Статьи</PageTitle>
        </div>

        <div class="flex flex-wrap">
            <Article
                v-for="(article, index) in articles"
                :key="article.url"
                :img-path="
                    require(`../../assets/img/article/article-${index + 1}.jpg`)
                "
                :title="article.title"
                :text="article.text"
                :time="article.time"
                class="sm:w-6/12 lg:w-4/12 wow fadeInUp"
                @details="goTo(index)"
            />
        </div>
    </div>
</template>

<script>
import Article from '../../components/article/Article.vue';
import PageTitle from '../../components/PageTitle.vue';
export default {
    components: { PageTitle, Article },
    data() {
        return {
            articles: require('../../assets/json/article')
        };
    },
    methods: {
        goTo(index) {
            return this.$router.push('/article/' + index);
        }
    }
};
</script>

<style lang="scss">
.section-article {
    &__title {
        background-image: url('../../assets/img/article/article-title-back.jpg');
        background-position: center center;
    }
}
</style>
