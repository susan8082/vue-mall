<template>
    <div>
      <router-link to="/Backstage">Go to Backstage</router-link>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#" style="padding: 2%">  <b-icon-book></b-icon-book> Caroline's Bookstore</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>


    <b-collapse id="nav-collapse" is-nav>
       <b-navbar-nav>
          <b-nav-item-dropdown text="Category" right>
          <b-dropdown-item href="#">All</b-dropdown-item>
          <b-dropdown-item href="#">Food</b-dropdown-item>
          <b-dropdown-item href="#">Car</b-dropdown-item>
        </b-nav-item-dropdown>
    </b-navbar-nav>

    <b-navbar-nav class="mx-auto">   
       <form class="mx-2 my-auto d-inline w-100">
            <div class="input-group">
                <input type="text" class="form-control border border-right-0" placeholder="Search...">
                <span class="input-group-append">
                    <button class="btn btn-outline-secondary border border-left-0"  @click="getProducts" type="button">
                        <b-icon icon="search"></b-icon>
                    </button>
                </span>
            </div>
        </form>
         </b-navbar-nav>
      <b-navbar-nav class="ms-auto" style="padding:2%">
        <b-nav-item v-b-modal.modal-register href="#" style="padding-right:15px; white-space:pre; border-right: 2px solid white;">Sign Up</b-nav-item>
        <b-nav-item v-b-modal.modal-login>Login</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
<div style="padding: 5%">
  <b-button @click="getProducts">getAllProducts</b-button>
  <b-button variant="outline-primary">Button</b-button>
   <b-table v-show="isShown" striped hover :items="items" :fields="fields">
     <template #cell(index)="data">
     {{data.index+1}}
      </template>
     <template #cell(imageUrl)="data">
      <img :src="data.value" style="width: 150px">
      </template>

   </b-table>
</div>


 <b-modal
      id="modal-register"
      ref="modal-register"
      title="Register"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
     <form ref="form" @submit.stop.prevent="handleSubmit">

      <!-- Username input -->
      <div class="form-outline mb-4">
        <input type="text" id="registerUsername" class="form-control" />
        <label class="form-label" for="registerUsername">Username</label>
      </div>

      <!-- Email input -->
      <div class="form-outline mb-4">
        <input type="email" id="registerEmail" class="form-control" />
        <label class="form-label" for="registerEmail">Email</label>
      </div>

      <!-- Password input -->
      <div class="form-outline mb-4">
        <input type="password" id="registerPassword" class="form-control" />
        <label class="form-label" for="registerPassword">Password</label>
      </div>

      <!-- Repeat Password input -->
      <div class="form-outline mb-4">
        <input type="password" id="registerRepeatPassword" class="form-control" />
        <label class="form-label" for="registerRepeatPassword">Repeat password</label>
      </div>

      <!-- Checkbox -->
      <div class="form-check d-flex justify-content-center mb-4">
        <input class="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
          aria-describedby="registerCheckHelpText" />
        <label class="form-check-label" for="registerCheck">
          I have read and agree to the terms
        </label>
      </div>
    
      </form>
    </b-modal>
     <b-modal
      id="modal-login"
      ref="modal-login"
      title="Login"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Account"
          label-for="account-input"
          invalid-feedback="Name is required"
          :state="accountState"
        > </b-form-group>
          <b-form-input
            id="account-input"
            v-model="account"
            :state="accountState"
            required
          ></b-form-input>
             <b-form-group
          label="Password"
          label-for="Password-input"
          invalid-feedback="Password is required"
          :state="passwordState"
        >
            </b-form-group>
            <b-form-input
            id="password-input"
            v-model="password"
            :state="passwordState"
            required
          ></b-form-input>
      
      </form>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isShown: false,
      fields: [
          'index',
          { key: 'productName', label: 'Name' },
          'category',
            { key: 'imageUrl', label: 'image' },
          'price',
          'description'
        ],
      items:[]
    }

  },
  
  
  // created(){
   
  //   })
  // },
  methods:{
  getProducts(){
 this.$http.get('/api/products').then((res)=>{
this.items = res.body.products
this.msg = res.body.products
this.isShown = true
  })
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
 .customDropdown {
    border: 3px dashed cyan;
    background-color: purple;
  }
</style>
