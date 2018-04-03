<template>
  <div class="columns is-mobile">
    <div class="column is-6 is-offset-3">
      <div class="message is-primary is-fullwidth custom-margin">
        <div class="message-header">
          <p>Add new task</p>
          <button class="delete" aria-label="delete" @click="back()"></button>
        </div>
        <div class="message-body">
          <form @submit.prevent="addTask()">
            <div class="field">
              <div class="control">
                <textarea class="textarea" placeholder="what do you want to do?" v-model="formText"></textarea>
              </div>
            </div>
            <div class="field">
              <label class="label">Due date</label>
              <div class="control">
                <input class="input" type="date" v-model="formDate">
              </div>
            </div>
            <div class="field is-grouped">
              <div class="control">
                <button class="button is-primary" type="submit">Submit</button>
              </div>
              <div class="control">
                <button class="button is-outlined" @click="back()">Go back</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewTaskComponent',
  data () {
    return {
      formText: '',
      formDate: ''
    }
  },
  methods: {
    back () {
      this.$router.push('/')
    },
    addTask () {
      // Form data validation
      this.$bus.tasks.push(
        {id: this.$bus.tasks.length, description: this.formText, date: this.formDate, complete: false}
      )
      this.back()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.custom-margin {
  margin: 1.5em 0 1.5em 0;
}

.center-row {
  text-align: center;
}

.right-row {
  text-align: right;
}

.left-row {
  text-align: left;
}

.task-complete {
  text-decoration: line-through;
}
</style>
