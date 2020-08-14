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
      //用户默认选择的性别
      gender: '',
    }
  },
  computed:{
    displayUsers(){
      const hash = {
        male:'男',
        female: '女'
      }
      const {users,gender} = this
if (gender ===''){
  return users
} else if (gender==='male'||gender==='female'){

  //或者if (typeof gender==='string')
  return users.filter( u => u.gender===hash[gender])
}else {
  throw new Error('gender 的值为意外的值！')
}
    }
  },

  template: `
    <div>
      <div>
        <button @click="gender = ''">全部</button>
        <button @click="gender = 'male'">男</button>
        <button @click="gender = 'female' ">女</button></div>
      <ul>
        <!--v-for接的属性：元素和索引    note:  :key!!!-->
        <li v-for="(u,index) in displayUsers" :key="index">{{u.name}} - {{u.gender}}</li>
      </ul>
    </div>
  `
}).$mount("#app");
