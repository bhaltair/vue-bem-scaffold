<template>
  <div id="app" class="main-container mine-SearchForm mine-SearchForm--advanced">
    <img alt="Vue logo" src="./assets/logo.png">
    <h2 class="mine-SearchForm__textField">SearchForm-textField</h2>
    <p class="mine-SearchForm__textField is-invalid">
      is-invalid
    </p>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <WenButton type="button" class="mix-any-class" size="large" look="primary" icon="emoji">按我</WenButton>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import WenButton from "./components/Button.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    WenButton
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>

<style lang="postcss" scoped>
@utility clearFix {
  &:before,
  &:after {
    content: "";
    display: table;
  }
  &:after {
    clear: both;
  } /* If supporting IE 6/7 */
  *zoom: 1;
}

@component-namespace mine {
  @b SearchForm {
    padding: 0;
    @modifier advanced {
      padding: 1rem;
    }
    @descendent textField {
      border: 1px solid #ccc;
      @when invalid {
        border: 1px solid red;
      }
    }
  }
}

@b SearchForm2 {
  padding: 0;
  @m advanced {
    padding: 1rem;
  }
  @e textField {
    border: 1px solid #ccc;
    @when invalid {
      border: 1px solid red;
    }
  }
}
</style>
