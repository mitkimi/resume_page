<template>
  <div class="box">
    <div class="title">
      <span>{{title}}</span>
    </div>
    <ul class="detail">
      <li v-for="o in list" :key="o.key">
        <div>
          <span class="title"><i class="el-icon-arrow-right"></i> {{o.title}}</span>
          <span class="links" v-if="urls.length>0">
            <a target="_blank" v-for="i in o.urls" :href="i.url" :key="i.text">
              <el-tag
                :key="i.text"
                :type="i.type"
                size="mini">
                {{i.text}}
              </el-tag>
            </a>
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
  data() {
    return {
      title: '项目经验',
      list: [
        {
          key: 1,
          title: '标题项目标题',
          description: '描述的内容，需要长一点。描述的内容，点。描述的内容，需要长一点。描述的内容，需要长一点。描述的内容，需要长一点。描述的内容，需要长一点。描述的内容，需要长一点。描述的内容，需要长一点。描述的内容，需要长一点。描述的内容，需要长一点。',
          urls: [
            {
              text: 'aa',
              url: 'https://www.baidu.com',
              type: '',
            },
            {
              text: 'bb',
              url: 'https://www.baidu1.com',
              type: '',
            },
          ],
        },
        {
          key: 2,
          title: '标题',
          description: '描述的内容，需要长一点。描述的内容，点。描述的内容，需要长一点。描述的内容，需要长一点。描述的内容，需要长一点。描述的内容，需要长一点。描述的内容，需要长一点。描述的内容，需要长一点。描述的内容，需要长一点。描述的内容，需要长一点。',
          urls: [
            {
              text: 'cc',
              url: 'https://www.baidu3.com',
              type: 'success',
            },
          ],
        },
      ],
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
  }
  .box .title {
    font-size: 14px;
    text-align:center;
    margin-bottom:10px;
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
  .box .detail .description {
    font-size:14px;
    margin: 8px 0 15px 0;
  }
</style>
