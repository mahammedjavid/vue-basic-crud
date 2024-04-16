<template>
  <button :class="mode" :type="type">
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: ["mode","type"],
};
</script>

<style scoped>
    .flat{
        min-width: 100px;
        background: darkmagenta;
        padding: 10px;
        border: none;
        border-radius: 3px;
        color: white;
    }
</style>

</style>
