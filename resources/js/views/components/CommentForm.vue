<template>
    <div class="card my-3 w-50">
        <div class="card-body">
            <form @submit.prevent="submit">
                <div class="mb-3">
                    <label for="name" class="form-label">Имя</label>
                    <input type="text" class="form-control" id="name" v-model="localComment.name">
                </div>
                <div class="mb-3">
                    <label for="text" class="form-label">Текст комментария</label>
                    <textarea class="form-control" id="text" rows="3" v-model="localComment.text"></textarea>
                </div>
                <div class="mb-3">
                    <label for="date" class="form-label">Дата комментария</label>
                    <date-picker v-model="localComment.date" valueType="format" id="date"></date-picker>
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
    data(){
        return {
            localComment: {...this.comment}
        }
    },
    emits: ['openCloseForm'],
    methods:{
        ...mapActions(['createComment', 'updateComment']),
        submit(){
            if(this.localComment.id){
                this.updateComment(this.localComment);
            }else{
                this.createComment(this.localComment);
            }
            this.$emit('openCloseForm');
        },
    },
};
</script>
