<script>
export default {
  name: "ui-button", // set block name
  props: ["size", "look", "type", "icon"]
};
</script>
 
<template>
  <button :class="b({ size, look })" :type="type">
    <span :class="b('text', { look })">
      <i v-if="icon" :class="b('icon', { icon })"> 👍 </i>
      <slot></slot>
    </span>
  </button>
</template>
