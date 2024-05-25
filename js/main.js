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
    },
    methods: {
      removeTask(indexRicevuto){
        console.log(indexRicevuto)
        console.log('RIMUOVO IL TASK')

        this.tasks = this.tasks.filter((task, index) => 
           index !== indexRicevuto);
        console.log(this.tasks)
      },
    }
  }).mount('#app');

/*
  button.addEventListener('click', function(){
    removeTask(index);

  })

  */