<template>

  <div>
    <div class="content__blog-tape">
      <div class="content__blog-block">
        <div class="content__blog-short">
          <router-link class="blog__href" :to="{ name: 'post', params: { id: firstPost.id - 1 } }"></router-link>
          <div class="blog__image" :style="{ 'background': 'url(' + firstPost.image + ') center 70% / 101% no-repeat' }">
            <div class="blog__icon" :style="{ 'background': 'url(./public/ico/' + firstPost.tag + '.svg) center / 26px no-repeat, #2f3e4b' }"></div>
          </div>
          <div class="blog__short-content">
            <p class="blog__tag">{{ firstPost.tag }}</p>
            <p class="blog__title">{{ firstPost.title }}</p>
            <p class="blog__description">{{ firstPost.body }}</p>
            <div class="blog__info">
              <p class="blog__date-author">{{ firstPost.published }}<br /><span>by {{ firstPost.author }}</span></p>
              <p class="blog__statuses">
                <span class="blog__statuses-views">{{ firstPost.views }}</span>
                <span class="blog__statuses-comments">{{ firstPost.comments }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="content__blog-block">
        <div class=""  v-for="i in Math.ceil(lastFourPosts.length / 4)" >
          <template v-for="singlePost in lastFourPosts.slice( (i - 1) * 4, i * 4 )"  >
            <div class="content__blog-short">
              <router-link class="blog__href" :to="{ name: 'post', params: { id: singlePost.id - 1 } }"></router-link>
              <div class="blog__image" :style="{ 'background': 'url(' + singlePost.image + ') center 30% / 101% no-repeat' }">
                <div class="blog__icon" :style="{ 'background': 'url(./public/ico/' + singlePost.tag + '.svg) center / 26px no-repeat, #2f3e4b' }"></div>
              </div>
              <div class="blog__short-content">
                <p class="blog__tag">{{ singlePost.tag }}</p>
                <p class="blog__title">{{ singlePost.title }}</p>
                <!--<p class="blog__description">{{ singlePost.body }}</p>-->
                <div class="blog__info">
                  <p class="blog__date-author">{{ singlePost.published }}<br />
                    <span>
                      <!--<router-link :to="'/by/${kebabify(post.author)}'">-->
                      <!--by {{ singlePost.author }}-->
                      <!--</router-link>-->
                    </span>
                  </p>
                  <p class="blog__statuses">
                    <span class="blog__statuses-views">{{ singlePost.views }}</span>
                    <span class="blog__statuses-comments">{{ singlePost.comments }}</span>
                  </p>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="content__blog-tape">
      <div class="content__blog-row">
        <div class="content__blog-short" v-for="singlePost in allPosts">
          <router-link class="blog__href" :to="{ name: 'post', params: { id: singlePost.id - 1 } }"></router-link>
          <div class="blog__image" :style="{ 'background': 'url(' + singlePost.image + ') center 30% / 101% no-repeat' }">
            <div class="blog__icon" :style="{ 'background': 'url(./public/ico/' + singlePost.tag + '.svg) center / 26px no-repeat, #2f3e4b' }"></div>
          </div>
          <div class="blog__short-content">
            <p class="blog__tag">
              {{ singlePost.tag }}
            </p>
            <p class="blog__title">{{ singlePost.title }}</p>
            <div class="blog__info">
              <p class="blog__date-author">{{ singlePost.published }} <br /><span>by {{ singlePost.author }}</span></p>
              <p class="blog__statuses">
                <span class="blog__statuses-views">{{ singlePost.views }}</span>
                <span class="blog__statuses-comments">{{ singlePost.comments }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  module.exports = {
    data: function() {
      return {
        endpoint: './db.json',
        firstPost: {},
        lastFourPosts: [],
        allPosts: []
      }
    },
    computed: {
      resource: function () {
        return this.$resource('./db.json')
      }
    },
    methods: {
      getLastPost: function() {
        this.resource.get().then(function(response) {
          this.firstPost = response.data[0]
        })
      },
      getLastFourPosts: function() {
        this.resource.get(this.endpoint).then(function(response) {
          var obj = response.data;
          this.lastFourPosts = obj.slice(1, 5);
        }, function(error) {
          alert('No connection to .json file!');
        })
      },
      getAllPosts: function() {
        this.resource.get().then(function(response) {
          var obj = response.data;
          this.allPosts = obj.slice(5, 50);
        }, function(error) {
          alert('No connection to .json file!');
        })
      },
      incrementIndex: function(index) {
        console.log()
        return (index + 1) % 5;
      }
    },
    created: function() {
      this.getLastPost()
      this.getLastFourPosts()
      this.getAllPosts()
    }
  }
</script>
