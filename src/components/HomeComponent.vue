<template>
  <div class="columns is-mobile">
    <div class="column is-6 is-offset-3">
      <div class="custom-margin">
        <router-link class="button is-primary" :to="{ name: 'NewTaskComponent' }">New</router-link>
      </div>
      <table class="table is-fullwidth custom-margin">
        <thead>
          <tr>
            <th class="center-row">Task</th>
            <th class="center-row">Due Date</th>
            <th colspan="2" scope="col" class="center-row">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="task in tasks" :key="task.id">
            <td class="center-row" :class="{'task-complete': task.complete}">{{ task.description }}</td>
            <td class="center-row" :class="{'task-complete': task.complete}">{{ task.date }}</td>
            <td class="right-row"><button class="button is-danger" title="delete" @click="deleteTask(task.id)"><font-awesome-icon :icon="['far', 'trash-alt']" /></button></td>
            <td class="left-row"><button class="button is-primary" title="toggle status" @click="toggleTask(task.id)"><font-awesome-icon :icon="['fas', 'toggle-on']" /></button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
  data () {
    return {
      show: false
    }
  },
  computed: {
    tasks () {
      return this.$bus.tasks
    }
  }, 
  methods: {
    toggleTask (id) {
      const taskIndex = this.tasks.findIndex(task => task.id === id)

      if (this.tasks[taskIndex]['complete']) {
        this.tasks[taskIndex]['complete'] = false
      } else {
        this.tasks[taskIndex]['complete'] = true
      }
      // Patch
    },
    deleteTask (id) {
      const taskIndex = this.tasks.findIndex(task => task.id === id)
      this.tasks.splice(taskIndex, 1)
      // Delete
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
