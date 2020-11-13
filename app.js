const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      enteredGoal:''
     };
  },
  methods:{
    addGoal(){
      this.goals.push({id:Math.random()*4,content:this.enteredGoal})
      this.enteredGoal=""
    },
    removeGoal(index){
      this.goals.splice(index,1)
    }
  }
});

app.mount('#user-goals');
