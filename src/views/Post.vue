<template>
  <div class="content__post" v-if="post">
    <div class="content__post-container">
      <div class="post__column">
        <div class="post__image" :style="{ 'background': 'url(' + post.image + ') center top / cover no-repeat' }"></div>
      </div>
      <div class="post__column">
        <article class="post__article">
          <header class="post__header">
            <p class="post__title">{{ post.title }}</p>
            <p class="post__meta">
              by <span class="post__meta-author">{{ post.author }}</span> — <time class="post__meta-date">{{ post.published }}</time>
            </p>
          </header>
          <section class="post__body" v-html="post.text"></section>
          <footer class="post__footer"></footer>
        </article>
      </div>
      <div class="post__close" @click="navBack"></div>
    </div>
  </div>
</template>

<script>
  var posts = require('../../db.json')

  module.exports = {
    data: function() {
      return {
        posts: posts,
        post: null,
        content: ''
      }
    },
    methods: {
      navBack: function() {
        this.$router.push('/')
      }
    },
    created: function() {
      var postId = this.$route.params.id

      this.post = this.posts[postId]
    }
  }
</script>
