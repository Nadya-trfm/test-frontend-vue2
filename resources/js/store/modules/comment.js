import axios from "axios";
import _ from "lodash";
export default {
    actions: {
        fetchComments(ctx, page){
            axios.get(
                '/api/comments/'
            ).then(function (response) {
                const comments = response.data;
                ctx.commit('updateComments', comments);
            });
        },
        createComment(ctx, comment){
            axios.post(
                '/api/comments/', comment
            ).then(function (response) {
                const comment = response.data;
                ctx.commit('addComment', comment);
                ctx.commit('sortComments');
            });
        },
        deleteComment(ctx, id){
            axios.delete(
                '/api/comments/'+id
            ).then(function (response) {
                ctx.commit('dropComment', id);
                ctx.commit('sortComments');
            });
        },
        updateComment(ctx, comment){
            axios.patch(
                '/api/comments/' + comment.id, comment
            ).then(function (response) {
                const comment = response.data;
                ctx.commit('refreshComment', comment);
                ctx.commit('sortComments');
            });
        },
        changeSortComments(ctx, sort){
            ctx.commit('updateSort', sort);
            ctx.commit('sortComments');
        }
    },
    mutations:{
        updateComments(state, comments){
            state.comments = comments;
        },
        addComment(state, comment){
            state.comments.unshift(comment);
        },
        dropComment(state, id) {
            state.comments = state.comments.filter(function( obj ) {
                return obj.id !== id;
            })
        },
        refreshComment(state, comment){
            const objIndex = state.comments.findIndex(obj => obj.id === comment.id);
            state.comments[objIndex] = comment;
        },
        updateSort(state, sort) {
            state.sort = sort;
        },
        sortComments(state){
            state.comments = _.orderBy(state.comments, [state.sort.checkedType],
                [state.sort.checkedDirection]);

        }
    },
    state:{
        comments: [],
        sort: {checkedType: 'id', checkedDirection:'asc'}
    },
    getters:{
        allComments(state, page){
            return state.comments;
        }
    },

}
