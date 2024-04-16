<template>
    <div>
        <slot>
            {{ title }}
        </slot>
    </div>
</template>

<script>
    export default {
        props : ['title']

    }
</script>

<style scoped>
    div{
        padding: 20px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4), 0px 7px 13px -3px rgba(0, 0, 0, 0.3), inset 0px -3px 0px rgba(0, 0, 0, 0.2);
    }
</style>