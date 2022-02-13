<template>
<div>
   <p> Add contacts</p>
   <input type="text" v-model="contato.name" placeholder="Name..." />
   <input type="text" v-model="contato.email" placeholder="Email..." />
   <input type="text" v-model="contato.contact" placeholder="Contact (phone)..." />
   <input type="file" @change="onFileChange" placeholder="Picture url..." />
   <button type="submit" @click.prevent="AddContact" >
   adicionar
   </button>
    <img :src="contato.picture" />
   </div>

  
   
</template>

<script>
import ContactService from "../../services/ContactService";

export default ({
name: "AddContact",
components: {
   
},
data(){
  return {
  contato : {
id: Math.random(),
name: '',
email: '',
contact: '',
picture: new Image(),
}

  };
},
methods:{
   AddContact(){
      ContactService.createContact(this.contato);
      console.log(JSON.stringify(localStorage))
   },
   onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
      createImage(file) {
      
      var reader = new FileReader();
  

      reader.onload = (e) => {
        this.contato.picture = e.target.result;
      };
      reader.readAsDataURL(file);
    },
}
})

</script>
