<template>
  <div class="box">
    <div class="title">
      <span>{{title}}</span>
    </div>
    <ul class="detail">
      <li v-for="o in list" :key="o.key">
        <div>
          <span class="title">
            <i style="color:#FFCC00;">
              <i class="iconfont icon-biaoji"></i>
            </i>
            {{o.title}}
          </span>
          <span class="links">
            <a target="_blank" v-if="i.url != '#'" v-for="i in o.urls" :href="i.url" :key="i.text">
              <el-tag
                :key="i.text"
                :type="i.type"
                size="mini">
                {{i.text}}
              </el-tag>
            </a>
            <span target="_blank"
            v-if="i.url == '#'"
            v-for="i in o.urls" :href="i.url" :key="i.text">
              <el-tag
                :key="i.text"
                :type="i.type"
                size="mini">
                {{i.text}}
              </el-tag>
            </span>
          </span>
          <div class="clearfix"></div>
          <div class="description">
            {{ o.description }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Box',
  props: ['infolist'],
  mounted() {
    // console.log(this.infolist);
  },
  data() {
    return {
      title: this.infolist.title,
      list: this.infolist.list,
    };
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .box {
    padding: 10px 18px;
    margin-bottom: 20px;
  }
  .box .title {
    font-size: 14px;
    text-align: center;
    margin-bottom:24px;
  }
  .box .title span {
    background:rgba(0,0,0,.1);
    padding:4px 16px;
    border:1px solid rgba(0,0,0,.1);
    border-radius:24px;
    color:#666;
  }
  .box .detail {

  }
  .box .detail .title {
    font-size:16px;
    color: #666;
  }
  .box .detail .links {
    margin-top: 2px;
    font-size: 13px;
    float: right;
  }
  .box .detail .links a:link, .box .detail .links a:visited{
    margin-left: 5px;
    text-decoration: none;
  }
  .box .detail .links span {
    margin-left:5px;
  }
  .box .detail .description {
    font-size:14px;
    margin: 8px 0 15px 0;
  }
</style>
