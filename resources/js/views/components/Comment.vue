<template>
    <div>
        <p>{{comment.name}}</p>
        <p>{{comment.text}}</p>
        <p>{{comment.date}}</p>
    </div>
</template>
<script>


export default {
    computed: {},
    props: ['comment'],
};
</script>
