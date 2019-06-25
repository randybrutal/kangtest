<template>
  <div class="about">
    <el-button>按钮</el-button>
    <div
      v-for="(item,idx) in flickrData.photo"
      :key="idx"
    >
    {{item.url_n}}
      <span>
        <img :src="item.url_n" :alt="1">
        <img :src="item.url_m" :alt="2">
      </span>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'about',
  data() {
    return {
      flickrData: [],
      dataLink: [],
    };
  },
  created() {
    this.takePower();
    // this.formatLink();
  },
  methods: {
    takePower() {
      axios({
        method: 'get',
        url: 'https://api.flickr.com/services/rest',
        params: {
          method: 'flickr.photos.search',
          api_key: 'd84a264de3f360f0a0d4ccda6b52a45e',
          user_id: '152291277@N08',
          page: 1,
          extras: 'o_dims, views, media, path_alias, url_sq, url_t, url_s, url_q, url_m, url_n, url_z, url_c, url_l, url_o, owner_name, date_taken, views',
          in_gallery: 1,
          format: 'json',
          nojsoncallback: 1,
          per_page: 30,
        },
      })
        .then((res) => {
          this.flickrData = res.data.photos || [];
        })
        .catch(() => {});
    },
    formatLink() {
      this.flickrData.forEach(item => {
        // console.log(item);
      });
    },
  },
};
</script>
