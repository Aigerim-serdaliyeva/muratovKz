<template>
    <div
        v-if="!success"
        class="text-15px 2xl:text-16px font-lato"
        :class="[textWhite]"
    >
        <ValidationObserver ref="form">
            <form
                class="text-center max-w-550px w-full mx-auto"
                @submit.prevent="sendMail()"
            >
                <ValidationProvider
                    v-slot="{ errors }"
                    rules="required"
                    class="input-div"
                >
                    <div class="input-title">Ваше имя</div>
                    <input
                        v-model="name"
                        type="text"
                        :class="[bgDarkInput]"
                        placeholder="Имя"
                    />
                    <span class="input-required">{{ errors[0] }}</span>
                </ValidationProvider>

                <ValidationProvider
                    v-slot="{ errors }"
                    rules="required|numeric|max:12"
                    class="input-div"
                >
                    <div class="input-title">Номер телефона</div>
                    <input
                        v-model="phone"
                        type="tel"
                        :class="[bgDarkInput]"
                        placeholder="Номер телефона"
                    />
                    <span class="input-required">{{ errors[0] }}</span>
                </ValidationProvider>

                <ValidationProvider class="input-div">
                    <div class="input-title">
                        Удобное время для звонка
                    </div>
                    <input
                        v-model="time"
                        type="time"
                        :class="[bgDarkInput]"
                        min="09:00"
                        max="18:00"
                        placeholder="18:00"
                    />
                </ValidationProvider>

                <button
                    type="submit"
                    class="button border-light-blue button-gradient"
                >
                    Получить бесплатную <br />
                    консультацию
                </button>
            </form>
        </ValidationObserver>
    </div>
    <div
        v-else
        class="text-green text-accent-blue text-center text-18px md:text-22px h-300px flex justify-center items-center md:h-auto"
    >
        Заявка успешно отправлена
    </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import axios from 'axios';

export default {
    components: { ValidationObserver, ValidationProvider },
    props: {
        isBgDarkInput: {
            type: Boolean,
            default: false
        },
        isTextWhite: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            name: '',
            phone: null,
            time: null,
            success: false
        };
    },
    computed: {
        bgDarkInput() {
            return this.isBgDarkInput ? 'input-dark' : 'input';
        },
        textWhite() {
            return this.isTextWhite ? 'text-white' : 'text-accent-dark-gray';
        }
    },
    methods: {
        sendMail() {
            this.$refs.form.validate().then(success => {
                if (!success) {
                    return;
                }

                const data = {
                    name: this.name,
                    phone: this.phone,
                    time: this.time
                };

                this.success = true;

                axios.post('mailer.php', data).then(() => {});
            });
        }
    }
};
</script>
