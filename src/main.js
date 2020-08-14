import Vue from "vue/dist/vue.js";

Vue.config.productionTip = false;


let id = 0

//封装！！！
const createUser = (name,gender)=>{
  id+=1
  return {id,name,gender}
}

new Vue({
  data() {
    return {
      users: [
        createUser('随心','男'),
        createUser('王和军','女'),
        createUser("聂文俊",'男'),
        createUser('隋鑫','男')
      ],
      displayUsers: []
    }
  },
  created() {
    this.displayUsers = this.users
  },
methods:{
    showMale(){
    this.displayUsers = this.users.filter(u => u.gender==='男')
    },
  showFemale(){
    this.displayUsers = this.users.filter(u => u.gender==='女')
  },
  showAll(){
    this.displayUsers = this.users
  }
},

  // 如何给三个按钮加事件处理函数
  // 思路一：点击之后改 users
  // 思路二：使用 computed

  template: `
    <div>
      <div>
        <button @click="showAll">全部</button>
        <button @click="showMale">男</button>
        <button @click="showFemale">女</button></div>
      <ul>
        <!--v-for接的属性：元素和索引    note:  :key!!!-->
        <li v-for="(u,index) in users" :key="index">{{u.name}} - {{u.gender}}</li>
      </ul>
    </div>
  `
}).$mount("#app");
