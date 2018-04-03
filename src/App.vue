<template>
  <div id="app" class="container">
    <br>
    <div class="columns is-mobile">
      <div class="column is-half is-offset-one-quarter"><h1 class="title is-size-1 has-text-centered">Vue Examples</h1></div>
    </div>
    <div class="columns is-mobile input-margin">
        <input class="column is-half is-offset-one-quarter" type="text" id="input" v-model="message">
    </div>
    <div class="columns is-mobile">
        <p class="column is-half is-offset-one-quarter">The value of input is: {{ message }} </p>
    </div>
    <div class="comlumns is-mobile">
      <div class="column is-half is-offset-one-quarter no-left-padding">
        <button class="button is-primary" v-on:click="seeAlert = !seeAlert">Toggle Alert</button>
        <article class="message is-primary input-margin" v-if="seeAlert">
          <div class="message-header">
            <p>Primary</p>
            <button class="delete" aria-label="delete" v-on:click="seeAlert = !seeAlert"></button>
          </div>
          <div class="message-body">
            Im an alert!!
          </div>
        </article>
      </div>
    </div>

    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      message: 'Hello World',
      seeAlert: false
    }
  }
}
</script>

<style>
@import "../node_modules/bulma/css/bulma.css";

.input-margin {
  margin-top: 2rem;
}

.no-left-padding {
  padding-left: 0 !important;
}
</style>
