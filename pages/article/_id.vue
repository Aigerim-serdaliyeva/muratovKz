<template>
    <div class="bg-#161616 leading-none pt-70px md:pt-0">
        <div class="section-article__title py-90px md:py-110px">
            <nuxt-link to="/article">
                <button class="button max-w-400px uppercase">
                    <span class="hidden md:block">Назат к статьям</span>
                    <span class="md:hidden">Другие статьи</span>
                </button>
            </nuxt-link>
        </div>

        <div class="bg-#125FA8 text-white font-raleway">
            <div class="container">
                <h3
                    class="font-bold text-center text-24px md:text-30px 2xl:text-40px py-10px md:py-20px md:w-8/12"
                >
                    {{ getArticleInfo.title }}
                </h3>
            </div>
        </div>

        <div class="container">
            <div class="bg-white flex -mx-15px sm:mx-0">
                <ArticleData
                    :img-path="
                        require(`../../assets/img/article/article-data-${id +
                            1}.jpg`)
                    "
                    :img-path-mobile="
                        require(`../../assets/img/article/article-data-mob-${id +
                            1}.jpg`)
                    "
                    :title="getArticleInfo.title"
                    :time="getArticleInfo.time"
                    :lists="getArticleInfo.lists"
                    class="md:w-8/12 wow fadeInUp"
                />

                <div class="w-4/12 py-40px px-15px hidden md:block">
                    <div
                        class="font-raleway text-center text-accent-gray font-bold text-30px mb-15px"
                    >
                        Рекомендации
                    </div>

                    <div
                        v-for="(article, index) in articles"
                        :key="article.url"
                        class="article bg-white text-accent-gray cursor-pointer p-10px rounded-2 mb-5px border border-solid border-accent-gray wow fadeInUp"
                        :class="[isActive(index) ? 'active' : '']"
                        @click="goTo(index)"
                    >
                        <h4 class="font-raleway font-medium mb-8px text-14px">
                            {{ article.title }}
                        </h4>
                        <div class="font-lato flex items-end text-13px">
                            <p>{{ article.text }}</p>
                            <div>{{ article.time }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ArticleData from '../../components/article/ArticleData.vue';
export default {
    components: { ArticleData },
    data() {
        return {
            details: require('../../assets/json/article-data'),
            articles: require('../../assets/json/article')
        };
    },
    computed: {
        getArticleInfo() {
            return this.details[this.$route.params.id];
        },
        id() {
            return Number(this.$route.params.id);
        }
    },
    methods: {
        goTo(index) {
            return this.$router.push('/article/' + index);
        },
        isActive(index) {
            return index === this.id;
        }
    }
};
</script>

<style lang="scss">
.article {
    &.active {
        background-color: #125fa8;
        color: #fff;
        border: none;
    }
}
</style>
