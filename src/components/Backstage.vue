<template>
<b-container fluid>
   <b-row style="border-bottom: 2px solid #DDDDDD">
  <b-navbar toggleable="lg">
    <b-navbar-brand><b-icon-book></b-icon-book> Caroline's Bookstore / Backstage </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ms-auto">
             <b-nav-item href="#">Link</b-nav-item>
               <b-nav-item href="#">Link</b-nav-item>
                 <b-nav-item href="#">Link</b-nav-item>
       <b-nav-item><router-link to="/">Back to Mall</router-link></b-nav-item>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
     </b-row>
  <b-row style="height: 100vh;" >
    <b-col id="sidebar" cols="2">

<b-list-group>
  <b-list-group-item class="sidebar-title"  variant="primary"><h5>Product</h5></b-list-group-item>
  <b-list-group-item class="sidebar-item" button>View Products</b-list-group-item>
  <b-list-group-item class="sidebar-item" button>Add Product</b-list-group-item>
    <b-list-group-item class="sidebar-title"  variant="primary" ><h5>User</h5></b-list-group-item>
  <b-list-group-item class="sidebar-item" button>Personal Users</b-list-group-item>
  <b-list-group-item class="sidebar-item" button>Bussiness Users</b-list-group-item>
    <b-list-group-item class="sidebar-title"  variant="primary"><h5>Order</h5></b-list-group-item>
  <b-list-group-item class="sidebar-item" button>View Orders</b-list-group-item>
  <b-list-group-item class="sidebar-item" button>Edit Order</b-list-group-item>
</b-list-group>
    </b-col>
        <b-col cols="10" style="background-color:#DDDDDD">

    </b-col>
  </b-row>
   </b-container>

</template>

<script>
export default {
  data () {
    return {
      msg: 'Backstage',
      sidebarIsShow:true
    }

  },
  
  
  // created(){
   
  //   })
  // },
  methods:{
  getProducts(){

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

#sidebar{
border-right: 2px solid #DDDDDD;
padding:0; 
text-align: left;
}
.sidebar-title{
  border: none
}
.sidebar-item{
  border: none;
  padding-left: 30px ;
}
</style>
