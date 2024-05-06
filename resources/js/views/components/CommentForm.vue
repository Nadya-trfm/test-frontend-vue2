<template>
    <div class="card my-3" style="width: 18rem;">
        <div class="card-body">
            <form @submit.prevent="submit">
                <div class="mb-3">
                    <label for="name" class="form-label">Имя</label>
                    <input type="text" class="form-control" id="name" v-model="comment.name">
                </div>
                <div class="mb-3">
                    <label for="text" class="form-label">Текст комментария</label>
                    <textarea class="form-control" id="text" rows="3" v-model="comment.text"></textarea>
                </div>
                <div class="mb-3">
                    <label for="date" class="form-label">Дата комментария</label>
                    <date-picker v-model="comment.date" valueType="format" id="date"></date-picker>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Ок</button>
                </div>
            </form>
        </div>
    </div>
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
