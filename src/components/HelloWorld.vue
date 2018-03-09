<template>
  <div>
    <el-container class="container">
      <el-card class="full-card">
        <div slot="header" class="header clearfix">
          <div class="left">
            <div class="name">{{ name }}</div>
          </div>
          <div class="right" style="padding-top: 6px;">
            <div class="title">{{ title }}</div>
            <div class="title-sub">{{ title_line2 }}</div>
          </div>
          <div class="clearfix"></div>
          <hr>
          <div class="left" style="margin-top:30px;">
            <div class="content info">
              <ul>
                <li><i class="iconfont icon-user11"></i> {{ info.basic }}</li>
                <li><i class="iconfont icon-school"></i> {{ info.college }}</li>
                <li><i class="iconfont icon-jobtitle"></i> {{ info.jobs }}</li>
              </ul>
            </div>
          </div>
          <div class="right" style="margin-top:20px;">
            <div  class="content connect">
              <div class="icon-box">
                <el-tooltip class="item ball" effect="dark" content="个人网站" placement="top">
                  <a :href="connect.web" target="_blank"><i class="iconfont icon-web3"></i></a>
                </el-tooltip>
                <el-tooltip class="item ball" effect="dark" content="Github" placement="top">
                  <a :href="connect.github" target="_blank"><i class="iconfont icon-github"></i></a>
                </el-tooltip>
                <el-tooltip class="item ball" effect="dark" content="gitee 码云" placement="top">
                  <a :href="connect.gitee" target="_blank"><i class="iconfont icon-git"></i></a>
                </el-tooltip>
                <el-tooltip class="item ball" effect="dark" content="Segmentfault" placement="top">
                  <a :href="connect.segmentfault" target="_blank">
                    <i class="iconfont icon-question"></i>
                  </a>
                </el-tooltip>
              </div>
              <ul style="margin-top:24px;">
                <li>{{connect.email}} <i class="iconfont icon-email"></i></li>
                <li>{{connect.cellphone}}
                  <el-tooltip class="item" effect="light" content="请发电子邮件获取电话号码" placement="right">
                    <i class="iconfont icon-cellphone"></i>
                  </el-tooltip>
                </li>
              </ul>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
        <el-row :gutter="20" style="color:#898989;margin-top:20px;">
          <el-col :span="12">
            <Box />
          </el-col>
          <el-col :span="12">
            <Box />
          </el-col>
        </el-row>
      </el-card>
    </el-container>
    <div class="foot">
      Created by Vue.js. All Rights Reserved 2018, 京ICP备15063748号-1
    </div>
  </div>
</template>

<script>
import Box from '@/components/box';

export default {
  name: 'HelloWorld',
  components: { Box },
  mounted() {
    this.$notify({
      title: '下载pdf版简历',
      type: 'info',
      duration: 1,
      position: 'bottom-right',
      showClose: false,
    });
  },
  data() {
    return {
      name: '田玉可',
      title: '前端开发工程师',
      title_line2: '（偏全栈运维方向）FSDOE',
      info: {
        basic: '北京 · 大兴 / 1990.07 / 男',
        college: '北京师范大学珠海校区 / 信息技术学院 / 数字媒体技术 · 本科',
        jobs: '3年前端开发工作经验 / 1年全栈+运维工作经验',
      },
      connect: {
        web: 'https://mitkimi.com',
        gitee: 'https://gitee.com/mitkimi',
        github: 'https://github.com/mitkimi',
        segmentfault: 'https://segmentfault.com/u/mitkimi',
        email: 'i@mitkimi.com',
        cellphone: '156 **** 5231',
      },
    };
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .full-card {
    width: 100%;
  }
  .header {
    color: #fff;
    padding:15px 15px 0 15px;
  }
  .left {
    float: left;
  }
  .right {
    float: right;
    text-align:right;
  }
  .header .name {
    font-size: 48px;
  }
  .header .title {
    font-size: 22px;
  }
  .header .title-sub {
    font-size: 16px;
  }
  .header .info {
    font-size:16px;
    line-height:28px;
  }
  .clearfix {
    clear:both;
  }
  hr {
    height:0;
    width:100%;
    border:0;
    border-bottom: 1px solid rgba(255,255,255,.4);
  }
  .icon {

  }
  .icon-box {
    margin:5px 0 10px 0;
  }
  .icon-box a {
    color: #ffffff;
    text-decoration: none;
  }
  .ball {
    padding:10px 13px;
    background:rgba(0,0,0,.4);
    border-radius: 60px;
  }
  .ball:hover {
    background:rgba(0,0,0,.6);
  }
  .foot {
    color:rgba(0,0,0,.4);
    text-align: center;
    font-size:13px;
    margin-top: 20px;
    margin-bottom: 60px;
  }
</style>
