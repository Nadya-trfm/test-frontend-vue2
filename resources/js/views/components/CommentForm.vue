<template>
   <form @submit.prevent="submit">
       <input type="text" v-model="comment.name">
       <input type="text" v-model="comment.text">
       <date-picker v-model="comment.date" valueType="format"></date-picker>
       <button type="submit">create</button>
   </form>
</template>

<script >
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import {mapActions} from "vuex";
export default {
    components: { DatePicker },
    data(){
        return{
            comment:{
                name: '',
                text: '',
                date: null,
            }
        }
    },
    methods:{
        ...mapActions(['createComment']),
        submit(){
            this.createComment(this.comment);
            this.cleanForm();
        },
        cleanForm(){
            this.comment = {};
        }
    }

};
</script>
