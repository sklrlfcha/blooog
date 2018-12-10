<template>
  <div class="content__create">
    <div class="content__editor">
      <form class="editor__form" @submit.prevent="savePost()">
        <!--<p class="editor__text">Title</p>-->
        <input class="editor__input" type="text" placeholder="Title" v-model="post.title" />
        <!--<p class="editor__text">Post body</p>-->
        <textarea class="editor__textarea" rows="15" placeholder="Post body" v-model="post.body"></textarea>
        <button class="editor__button">Save</button>
      </form>
      <div class="post__close" @click="navBack"></div>
    </div>
  </div>
</template>

<script>
  module.exports = {
    data: function() {
      return {
        endpoint: "https://jsonplaceholder.typicode.com/posts",
        post: {}
      }
    },
    computed: {
      resource: function() {
        return this.$resource('https://jsonplaceholder.typicode.com/posts{/id}')
      }
    },
    methods: {
      savePost: function () {
        this.resource.save(this.post);
        alert("Because we haven't got any databes, I used https://jsonplaceholder.typicode.com/, so this API can give me any post and also I can send whatever I want to their API. You can check network in your browser, find 'posts' and check the statuses of sended info")
      },
      navBack: function() {
        this.$router.push('/')
      }
    }
  }
</script>
