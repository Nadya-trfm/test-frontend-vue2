<template>
    <div class="btn-toolbar" role="toolbar">
        <div class="btn-group me-2" role="group" >
            <input type="radio" class="btn-check" name="btntype" id="btnid" value="id" v-model="sort.checkedType">
            <label class="btn btn-outline-primary" for="btnid">Сортировка по id</label>

            <input type="radio" class="btn-check" name="btntype" id="btndate" value="date" v-model="sort.checkedType">
            <label class="btn btn-outline-primary" for="btndate">Сортировка по дате</label>
        </div>

        <div class="btn-group me-2" role="group" >
            <input type="radio" class="btn-check" name="btnarrow" id="asc" value="asc" v-model="sort.checkedDirection">
            <label class="btn btn-outline-primary" for="asc">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
                </svg>
            </label>
            <input type="radio" class="btn-check" name="btnarrow" id="desc" value="desc" v-model="sort.checkedDirection">
            <label class="btn btn-outline-primary" for="desc">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-circle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
                </svg>
            </label>

        </div>
    </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
    name: "ButtonGroup",
    data() {
        return {
            sort: {
                checkedType: 'id',
                checkedDirection: 'asc',
            }
        }
    },
    watch:{
        sort: {
            handler: function (newValue) {
                this.changeSortComments(newValue);
            },
            deep: true,
        }
    },
    methods: {
        ...mapActions(['changeSortComments']),
    }
}

</script>


<style scoped>

</style>
