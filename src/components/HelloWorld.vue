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
            <Box :infolist="data.projects" />
            <Box :infolist="data.projects_p" />
          </el-col>
          <el-col :span="12">
            <Box :infolist="data.professional" />
            <Box :infolist="data.practice" />
          </el-col>
        </el-row>
      </el-card>
    </el-container>
    <div class="foot">
      Created by Vue.js. All Rights Reserved 2018, 京ICP备15063748号
    </div>
  </div>
</template>

<script>
import Box from '@/components/box';

export default {
  name: 'HelloWorld',
  components: { Box },
  mounted() {
    /* this.$notify({
      title: '下载pdf版简历',
      type: 'info',
      duration: 0,
      position: 'bottom-right',
      showClose: false,
    }); */
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
      data: {
        projects: {
          title: '项目经验 - 公司',
          list: [
            {
              key: 1,
              title: 'U味儿新版CRM管理和接单系统（isomopic）',
              description: '使用webpack作为打包工具，前端技术栈使用react + react-router + antd等框架及库，采用前后端同构的形式满足搜索引擎内容抓取。为保证代码整洁和规范其他前端开发人员的代码习惯使用eslint Airbnb标准进行代码编写。项目结构方面，分为数据模型（model）、页面级组件（page）、公用组件（component）和工具（utility）等。代码托管平台：coding.net',
              urls: [
                {
                  text: 'CRM',
                  url: 'http://crm2.uweer.com',
                  type: 'success',
                },
                {
                  text: '接单系统',
                  url: 'http://waimai.uweer.com',
                  type: 'success',
                },
              ],
            },
            {
              key: 2,
              title: 'U果新CRM和接单系统中端 - api（内部名称：三元桥）',
              description: '核心技术使用ThinkPHP5.x框架，使用运行环境为apache2、php5.4以上环境。用于对接微信小程序',
              urls: [],
            },
            {
              key: 3,
              title: 'U果Lite - 微信小程序（内部名称：小苹果）',
              description: '核心技术使用ThinkPHP5.x框架，使用运行环境为apache2、php5.4以上环境。用于对接微信小程序',
              urls: [
                {
                  text: 'U果Lite',
                  url: '#',
                  type: 'warning',
                },
              ],
            },
          ],
        },
        projects_p: {
          title: '项目经验 - 个人',
          list: [
            {
              key: 1,
              title: '公交报站器（pc-web）管理端',
              description: '使用vue-cli脚手架构建项目，配合webpack作为打包工具、vue-router的hash模式（可转history模式）、element UI作为样式库。',
              urls: [
                {
                  text: 'DEMO',
                  url: 'https://www.baidu.com',
                  type: '',
                },
                {
                  text: 'DOCs',
                  url: 'https://www.baidu1.com',
                  type: 'success',
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
        },
        professional: {
          title: '专业技能',
          list: [
            {
              key: 1,
              title: '标题项目标题',
              description: '描述的内容，需要长一点。描述的内容，点。描述的内容，需要长一点。描述的内容，需要长一点。描述的内容，需要长一点。描述的内容，需要长一点。描述的内容，需要长一点。描述的内容，需要长一点。描述的内容，需要长一点。描述的内容，需要长一点。',
              urls: [
                {
                  text: 'DEMO',
                  url: 'https://www.baidu.com',
                  type: '',
                },
                {
                  text: 'DOCs',
                  url: 'https://www.baidu1.com',
                  type: 'success',
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
        },
        practice: {
          title: '实践',
          list: [
            {
              key: 1,
              title: '标题项目标题',
              description: '描述的内容，需要长一点。描述的内容，点。描述的内容，需要长一点。描述的内容，需要长一点。描述的内容，需要长一点。描述的内容，需要长一点。描述的内容，需要长一点。描述的内容，需要长一点。描述的内容，需要长一点。描述的内容，需要长一点。',
              urls: [
                {
                  text: 'DEMO',
                  url: 'https://www.baidu.com',
                  type: '',
                },
                {
                  text: 'DOCs',
                  url: 'https://www.baidu1.com',
                  type: 'success',
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
        },
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
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    color:#f90;
  }
  .ball:hover {
    background:rgba(0,0,0,.6);
    box-shadow: 0 0 8px rgba(0,0,0,.6);
  }
  .foot {
    color:rgba(0,0,0,.4);
    text-align: center;
    font-size:13px;
    margin-top: 20px;
    margin-bottom: 60px;
  }
</style>
