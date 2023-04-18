const { createApp } = Vue;
import contacts from "./db.js";

createApp({
    data(){
        return{
            contacts,
            counter : 0
        }
    },
    methods:{
        selectedProfile(i){
            this.counter = i
            console.log(this.selectedProfile);
        }
    }

}).mount('#app')