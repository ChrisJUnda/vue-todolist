'use strict'

const { createApp } = Vue

  createApp({
    data() {
      return {
        title: 'TODO list',
        tasks: [
          {
            text: 'Task 1',
            done: false,
          },

          {
            text: 'Task 2',
            done: true,
          },

          {
            text: 'Task 3',
            done: false,
          },


        ],  
      }
    }
  }).mount('#app')