const { createApp } = Vue;
import contacts from "./db.js";

createApp({
    data(){
        return{
            contacts,
        }
    }

}).mount('#app')