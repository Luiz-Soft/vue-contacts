<template>
<div>
<div class="wrapper">
   <template v-for="(contato,key) in contatos">
   <ContactCard :key="key" :contato="contato.name"/>
   </template>
   </div>
   </div>
</template>

<script>
import ContactCard from './components/ContactCard.vue'
import ContactService from "../../services/ContactService";

export default {
name: "ListContacts",
components: {
   ContactCard
},
data(){
   return {
      contatos: ''
   }
},

methods: {
async getContacts(){
  this.contatos = await ContactService.getContacts()

}
},
async created() {
    await this.getContacts()
  },

}





</script>

<style scoped>
.wrapper{
   display:flex;
   align-items: center;
}
</style>