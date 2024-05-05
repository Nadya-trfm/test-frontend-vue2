<template>
   <form @submit.prevent="submit">
       <input type="text" v-model="comment.name">
       <input type="text" v-model="comment.text">
       <date-picker v-model="comment.date" valueType="format"></date-picker>
       <button type="submit">submit</button>
   </form>
</template>

<script >
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import {mapActions} from "vuex";

export default {
    components: { DatePicker },
    props: {
        comment: {
            type: Object,
            required: false,
            default: function () {
                return {
                    name: '',
                    text: '',
                    date: null,
                }
            },
        },
    },
    emits : 'updateOpenForm',
    methods:{
        ...mapActions(['createComment', 'updateComment']),
        submit(){
            if(this.comment.id){
                this.updateComment(this.comment);
            }else{
                this.createComment(this.comment);
                this.updateOpenForm();
            }

            this.cleanForm();
        },
        cleanForm(){
            this.comment = {};
        },
        updateOpenForm() {
            this.$emit('updateOpenForm');
        }
    },
};
</script>
