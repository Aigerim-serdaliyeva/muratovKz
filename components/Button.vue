<template>
    <button class="button button-gradient">
        {{ buttonText }} <br />
        {{ buttonText2 }}
    </button>
</template>

<script>
export default {
    props: {
        buttonText: {
            type: String,
            default: ''
        },
        buttonText2: {
            type: String,
            default: ''
        }
    }
};
</script>

<style></style>
