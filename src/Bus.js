import Vue from 'vue'
let bus = new Vue()
bus.tasks = [
    {id: '0', description: 'Go to the store', date: '2018-02-28', complete: true},
    {id: '1', description: 'Reply emails', date: '2018-02-28', complete: false},
    {id: '2', description: 'Go to the farm', date: '2018-02-28', complete: true},
    {id: '3', description: 'Go to work', date: '2018-02-28', complete: false}
  ]
export default bus
