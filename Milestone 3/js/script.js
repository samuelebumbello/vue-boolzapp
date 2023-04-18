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
        },
        msgEnter(){
            const newMsg = {
                message:this.msgInvio,
                status: "sent"
            }
            this.msgInvio = '';
            this.contacts[this.counter].messages.push(newMsg)
            this.msgReceived()
        },
        msgReceived(){
            setTimeout(() => {
                const answer = {
                    message: 'Ok',
                    status: 'received'
                }
                this.contacts[this.counter].messages.push(answer)
            },1000)
        }
    }

}).mount('#app')