<template>
  <div class="post" v-if="post">
    <img :src="post.image" />
    <p>{{ post.title }}</p>
    <p>{{ post.body }}</p>
  </div>
</template>

<script>
  var posts = require('../../db.json')

  module.exports = {
    data: function() {
      return {
        posts: posts,
        post: null
      }
    },
    computed: {
      resource: function () {
        return this.$resource('./db.json')
      }
    },
    methods: {
      getByAuthor: function() {
        var postId = this.$route.params.id

        this.resource.get().then(function(response) {
          var obj = response.data;
          // this.allPosts = obj;
          console.log(response.data)
        }, function(error) {
          alert('No connection to .json file!');
        })
      },
    },
    created: function() {
      this.getByAuthor();
    }
  }
</script>
