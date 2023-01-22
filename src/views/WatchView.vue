<!-- <template>
  <div> -->

    <!-- {{ $vuetify.breakpoint.name }} -->

    <!-- <v-row> -->


      <!-- <v-col cols="12" xs="12" sm="6" md="4" lg="3"><v-card>1</v-card></v-col>
      <v-col cols="12" xs="12" sm="6" md="4" lg="3"><v-card>2</v-card></v-col>
      <v-col cols="12" xs="12" sm="6" md="4" lg="3"><v-card>3</v-card></v-col>
      <v-col cols="12" xs="12" sm="6" md="4" lg="3"><v-card>4</v-card></v-col>
      <v-col cols="12" xs="12" sm="6" md="4" lg="3"><v-card>5</v-card></v-col>
      <v-col cols="12" xs="12" sm="6" md="4" lg="3"><v-card>6</v-card></v-col>
      <v-col cols="12" xs="12" sm="6" md="4" lg="3"><v-card>7</v-card></v-col> -->

      <!-- <v-col cols="12" lg="3"><v-card>Item Name</v-card></v-col>
      <v-col cols="12" lg="3"><v-card>Unit Price</v-card></v-col>
      <v-col cols="12" lg="3"><v-card>Unit Price</v-card></v-col> -->


    <!-- </v-row> -->



  <!-- </div>
</template> -->

<template>
    <div>
      <!-- {{ mullQuntityPrice }} -->
      {{ discount }}
      {{ vat }}
      
  
      <h1> Order Table </h1>
      <v-simple-table dark>
        <template v-slot:default>
  
          <thead>
            <tr>
              <th class="text-left">Item Name</th>
              <th class="text-left">Unit Price (Tk)</th>
              <th class="text-left">Quntity</th>
              <th class="text-left">Price (Tk)</th>
            </tr>
          </thead>
  
          <tbody>
            <tr
              v-for="item in items"
              :key="item.name"
            >
              <td>{{ item.name }}</td>
              <td>{{ item.price }}</td>
              <td>
                <v-btn @click="decrementProduct(item)" class="mx-2" fab dark small color="primary"><v-icon dark>mdi-minus</v-icon></v-btn>
                 {{ item.quantity }}
                 <v-btn @click="incrementProduct(item)" class="mx-2" fab dark small color="primary"><v-icon dark>mdi-plus</v-icon></v-btn>
              </td>
              
                <td> {{ mullQuntityPrice(item) }} </td>
              
            </tr>
          </tbody>
  
          <v-row>
            <v-col cols="12" lg="4">
              <div class="d-flex flex-row align-center">
                <h3 class="mr-2">Discount:</h3>
                <div style="width: 100px;">
                  <v-text-field
                    v-model="discount"
                    label="Discount %">
                  </v-text-field>
                </div>
              </div>
            </v-col>
  
            <v-col cols="12" lg="4">
              <div class="d-flex flex-row align-center">
                <h3 class="mr-2">Vat:</h3>
                <div style="width: 100px;">
                  <v-text-field
                    v-model="vat"
                    label="Vat %">
                  </v-text-field>
                </div>
              </div>
            </v-col>
  
            <v-col cols="12" lg="4" class="d-flex flex-row align-center">
              <h3>{{ 'Total: ' + totalPrice}}</h3>
            </v-col>
          </v-row>
  
        </template>
      </v-simple-table>
  
      
    
    </div>
  </template>
  
  <script>
  import ItemName from '@/assets/JsonFile/ItemName.json'
    export default {
      data () {
        return {
          items: JSON.parse(JSON.stringify(ItemName)),
          discount: null,
          vat: null,
          priority: true // true discount first & vat second <=> false vat first & discount second
        }
      },
      watch: {
        vat(){
            // console.log('vat')
            this.totalPrice
        },
        discount(){
            // console.log('discount')
            this.totalPrice
        }
      },
      computed: {
        totalPrice(){
          let sum = 0
          for(let i= 0; i<this.items.length; i += 1){
            sum += this.mullQuntityPrice(this.items[i])
          }
          if(this.priority) return this.calculateVat(this.vat, this.calculateDiscount(this.discount, sum))
          else return this.calculateDiscount(this.discount, this.calculateVat(this.vat, sum)) 
          
        },
  
      },
      methods: {
        mullQuntityPrice(item){
          return item.price*item.quantity
        },
        decrementProduct(item) {
          
          if (item.quantity>0){
            item.quantity -= 1
            return item.quantity
          
          }
          else {
            alert("Quntity never negative");
          }
        },
        incrementProduct(item){
          item.quantity += 1
          return item.quantity
        },
        calculateDiscount(discount, sum){
          if(discount === null || discount === '') discount = 0
          return (((100-parseInt(discount))*sum)/100).toFixed(2)
        },
        calculateVat(vat, sum){
          if(vat === null || vat === '') vat = 0
          return (((100+parseInt(vat))*sum)/100).toFixed(2)
        }
        
      }
      
    }
  </script>
  
  <!-- <style scoped>
  .v-text-field{
        width: 20px;
  }
  </style> -->