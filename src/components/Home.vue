<template>
    <div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#" style="padding: 2%">  <b-icon-book></b-icon-book> Caroline's Bookstore</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
       <b-navbar-nav>
          <b-nav-item-dropdown text="Category" right>
          <b-dropdown-item  @click="getProducts('ALL')">ALL</b-dropdown-item>
          <b-dropdown-item @click="getProducts('FOOD')">Grocery</b-dropdown-item>
          <b-dropdown-item @click="getProducts('CAR')">Automobile</b-dropdown-item>
        </b-nav-item-dropdown>
    </b-navbar-nav>

    <b-navbar-nav class="mx-auto">   
       <form class="mx-2 my-auto d-inline w-100">
            <div class="input-group">
                <input type="text" class="form-control border border-right-0" placeholder="Search..." v-model="search">
                <span class="input-group-append">
                    <button class="btn btn-outline-secondary border border-left-0"  @click="getProducts('ALL')" type="button">
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
<div style="padding: 2%">
  <b-container class="bv-example-row bv-example-row-flex-cols">
  <b-row align-h="between">
    <b-col cols="2">
    <h2 v-if="isShown" style="bold">
      <span v-if="type==='FOOD'">GROCERY</span>
        <span v-else-if="type==='CAR'">AUTOMOBILE</span>
          <span v-else>ALL PRODUCTS</span>
    </h2>
    </b-col>
    <b-col cols="2">
    <b-form-select v-if="isShown" v-model="selected" :options="options"></b-form-select>
    </b-col>
  </b-row>
  <b-row  align-h="center">
    <b-col v-for="(item, index) in items" :key="index" style="margin-top: 2%" cols="4">
 <b-card :title="`${item.productName}`" :img-src="`${item.imageUrl}`" :img-alt="`${item.productName}`"  img-top>
      <b-card-text>
        {{item}}
      </b-card-text>
       <b-card-text style="text-align:right;font-size: x-large;">£ {{item.price}}</b-card-text>  
   <b-card-text class="small text-muted">Last updated date: {{item.lastModifiedDate}}</b-card-text>
    </b-card>
    </b-col>
  </b-row>
    <b-row align-h="center">
  </b-row>
       <b-row  align-h="center">
        <b-col cols="2">
   <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      v-if="isShown"
      style="margin-top: 10%"
    ></b-pagination>
            </b-col>
       </b-row>
</b-container>
 
</div>

 <b-modal
      centered 
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
     centered 
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
      isShown: false,
      perPage: 5,
      currentPage: 1,
      type: 'ALL',
      rows:0,
      fields: [
          'index',
          { key: 'productName', label: 'Name' },
          'category',
            { key: 'imageUrl', label: 'image' },
          'price',
          'description'
        ],
      items:[],
      selected:'priceAsc',
      options:[
         { value: 'priceAsc', text: 'Price(Low to High)' },
          { value: 'priceDesc', text: 'Price(High to Low)' },
          { value: 'newArrival', text: 'Update Date(New to Old)' },
      ], 
      search:null
    }

  },
  methods:{
  getProducts(type){
  this.type = type
  this.items = []

  var obj = {pageIndex : this.currentPage-1}
  if (this.selected==='priceAsc'){
        obj.orderBy = 'price'
        obj.descOrAsc = 'asc'
  }else if  (this.selected==='priceDesc'){
        obj.orderBy = 'price'
        obj.descOrAsc = 'desc'
  }else{
        obj.orderBy = 'lastModifiedDate'
        obj.descOrAsc = 'desc'
  }

  if (type !== 'ALL'){
     obj.category = type
  }
  if (this.search !== null){
    obj.search = this.search
  }
  this.isShown = false
  this.$http.get('/api/products', {params: obj}).then((res)=>{
  this.items = res.body.products
  this.rows = res.body.total
       })
    this.isShown = true
     },

  
},
 watch: {
      currentPage() {
        this.getProducts(this.type)
      },
      selected(){
        this.getProducts(this.type)
      },

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
