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
            <Box :infolist="data.history" />
            <Box :infolist="data.projects_p" />
          </el-col>
          <el-col :span="12">
            <Box :infolist="data.professional" />
            <Box :infolist="data.practice" />
            <Box :infolist="data.comingsoon" />
          </el-col>
        </el-row>
      </el-card>
    </el-container>
    <div class="foot">
      Created by Vue.js. Powered by mitkimi.com. All Rights Reserved
      <span>2017 ～ 2018</span>, {{ icpno }}
    </div>
  </div>
</template>

<script>
import Box from '@/components/box';

export default {
  name: 'HelloWorld',
  components: { Box },
  mounted() {
    this.showDownload();
  },
  data() {
    return {
      name: '田玉可',
      title: '前端开发工程师',
      title_line2: '（偏全栈运维方向）FSDOE',
      icpno: '京ICP备15063748号',
      info: {
        basic: '北京 · 大兴 / 1990.07 / 男',
        college: '北京师范大学珠海分校 / 信息技术学院 / 数字媒体技术 · 工学学士',
        jobs: '2年校内项目组开发经验 / 3年前端开发工作经验 / 1年全栈+运维工作经验',
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
              description: '使用webpack作为打包工具，前端技术栈使用react + react-router + antd等框架及库，采用前后端同构的形式满足搜索引擎内容抓取。为保证代码整洁和规范其他前端开发人员的代码习惯使用eslint Airbnb标准进行代码编写。项目结构方面，分为数据模型（model）、页面级组件（page）、公用组件（component）和工具（utility）等。（樊涛）代码托管平台：coding.net',
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
              description: '核心技术使用ThinkPHP5.x框架，使用运行环境为apache2、php5.4以上环境。用于对接微信小程序。代码托管平台：coding.net',
              urls: [],
            },
            {
              key: 3,
              title: 'U果Lite - 微信小程序（内部名称：小苹果）',
              description: 'U果CRM阉割版，主要功能是给使用者查看CRM提供的mapreduce数据，和进行简单的管理。使用WeUI、微信开发者工具进行代码编写。我主要做了框架搭建、接口代理两大块。代码托管平台：coding.net',
              urls: [
                {
                  text: 'U果Lite',
                  url: '#',
                  type: 'warning',
                },
              ],
            },
            {
              key: 4,
              title: '对标360 duibiao360.com（代号：Gemini）',
              description: '供职于对标科技时，在CTO的带头下进行了原始产品的改版。我们将UI库从Material-UI切换到and.design，同时将语法升级到ES6。并且使用了百度的echarts图表插件进行了数据可视化。该项目使用react-transmit从服务端获取数据，并在前后端同时渲染，使得搜索引擎在抓去代码时候可以获取到服务端传来的数据。代码托管平台：coding.net',
              urls: [
                {
                  text: '下线或不稳定',
                  url: 'http://www.duibiao360.com',
                  type: '',
                },
              ],
            },
            {
              key: 5,
              title: '海外帮 hwbang.com',
              description: '【苏州易达捷进出口贸易有限公司 ／ 苏州亿极云商科技有限公司深圳分公司开发部】代码托管平台：GoGIT',
              urls: [
                {
                  text: '海外帮',
                  url: 'http://www.hwbang.com',
                  type: 'success',
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
              description: '使用vue-cli脚手架构建项目，配合webpack作为打包工具、vue-router的hash模式（可转history模式）、element UI作为样式库。代码托管平台：github',
              urls: [
                {
                  text: '管理端',
                  url: 'https://bus.ipietech.net',
                  type: 'success',
                },
                {
                  text: '司机端',
                  url: '#',
                  type: 'info',
                },
              ],
            },
          ],
        },
        history: {
          title: '工作经历',
          list: [
            {
              key: 1,
              title: '北京快洁筷好味科技有限公司',
              description: '【2017.10至今】 - 高级前端开发工程师（偏全栈+运维）',
              urls: [],
            },
            {
              key: 2,
              title: '北京对标科技有限责任公司',
              description: '【2016.10 - 2017.9】 - 前端开发工程师',
              urls: [],
            },
            {
              key: 3,
              title: '北京师范大学珠海分校',
              description: '【2016.3 - 2016.9】 - 项目开发特聘讲师',
              urls: [],
            },
          ],
        },
        professional: {
          title: '专业技能',
          list: [
            {
              key: 1,
              title: '工作平台',
              description: '熟练使用Mac、Linux GUI和Windows进行开发，熟悉H5，CSS3，熟练使用Bootstrap、jQuery、jQuery.ajax。对React.js、Vue.js情有独钟，参与过多个SaaS、系统的开发。',
              urls: [
                {
                  text: 'Mac',
                  url: '#',
                  type: 'success',
                },
                {
                  text: 'Ubuntu',
                  url: '#',
                  type: 'success',
                },
                {
                  text: 'Windows',
                  url: '#',
                  type: 'warning',
                },
              ],
            },
            {
              key: 2,
              title: '联合开发能力',
              description: '熟练使用git版本控制系统，熟练使用分支、解决冲突处理和代码merge等，熟悉svn。',
              urls: [
                {
                  text: 'git',
                  url: '#',
                  type: 'success',
                },
                {
                  text: 'svn',
                  url: '#',
                  type: 'warning',
                },
              ],
            },
            {
              key: 3,
              title: '后端和运维',
              description: '熟悉ThinkPHP、CI，了解Yii等PHP框架，熟悉MVC模式。对常见的Linux发行版本（包括但不限于Ubuntu、Debian、CentOS）可进行一般的日常的服务器维护操作，熟练搭建LNMP(A)环境。能够搭建ShadowSocksR梯子环境，和进行本地多平台的配置。',
              urls: [
                {
                  text: 'PHP',
                  url: '#',
                  type: 'success',
                },
                {
                  text: 'MVC',
                  url: '#',
                  type: 'success',
                },
                {
                  text: 'LNMPA',
                  url: '#',
                  type: 'success',
                },
                {
                  text: 'VPN',
                  url: '#',
                  type: 'success',
                },
              ],
            },
          ],
        },
        practice: {
          title: '实 践',
          list: [
            {
              key: 1,
              title: '北京师范大学珠海分校',
              description: '我在2016年有半年多的时间回到母校，作为特聘教师给师弟师妹们讲在岗位上的一线人员的工作和推荐一些好用的工具。其次开设“Web界面程序设计”、“项目开发实践”等课程。（北京师范大学珠海分校 许跃颖）',
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
              title: '知名魔术师、主持人',
              description: '在大学期间，参与过多个国内国际魔术大会，并参与过多次商演。编写过多本魔术讲义、开设过多次魔术讲座。2014年央视《大魔术师》CCTV微视TV嘉宾等。',
              urls: [
                {
                  text: '百度百科',
                  url: 'https://www.baidu.com/link?url=MZyfdv8wSIrfsxSoe4dRg1wxtFOfuKfdi17i7gSzE-3Gm-RUGpIgiV4uIBIcOigfoPdyv6Rg5E0HEG3woeFCDWsp54XMOrsV4COSiUTpBuw5vN0ZKQUQF3s5Daeuio9V&wd=&eqid=9a64191f00031f0f000000025aa4fc93',
                  type: '',
                },
              ],
            },
          ],
        },
        comingsoon: {
          title: '即将上线',
          list: [
            {
              key: 1,
              title: 'TOS - 教师学生约课系统（SaaS）',
              description: '此系统将满足中小琴行、街舞教室、一对一培训机构和小型驾校等教师学生上课时间约定的软需求。管理端使用PCWeb，客户端使用微信小程序上线。',
              urls: [
                {
                  text: 'DEMO',
                  url: 'https://url.ipietech.net/demo/tos.html',
                  type: '',
                },
                {
                  text: 'DOCs',
                  url: 'https://url.ipietech.net/docs/tos.html',
                  type: '',
                },
              ],
            },
            {
              key: 2,
              title: '租个车HiCar - 小型租车系统',
              description: '此系统将满足二三线城市租车公司以及中小型租赁行业公司的公共关系和客户管理需求。管理端使用PCWeb，客户端将在iOS、安卓和微信小程序三个平台上线。',
              urls: [
                {
                  text: 'DEMO',
                  url: 'https://url.ipietech.net/demo/hicar.html',
                  type: '',
                },
                {
                  text: 'DOCs',
                  url: 'https://url.ipietech.net/docs/hicar.html',
                  type: '',
                },
              ],
            },
            {
              key: 3,
              title: 'Oxygen氧气 - 每个人都需要的企业IM',
              description: '此系统设计为改善钉钉的操作体验和满足数据保密。管理端使用PCWeb，客户端将在MacOS、Windows、iOS、安卓和微信小程序五个平台上线。',
              urls: [
                {
                  text: 'DEMO',
                  url: 'https://url.ipietech.net/demo/hicar.html',
                  type: '',
                },
                {
                  text: 'DOCs',
                  url: 'https://url.ipietech.net/docs/hicar.html',
                  type: '',
                },
              ],
            },
            {
              key: 4,
              title: 'ipietech.com',
              description: '',
              urls: [
                {
                  text: 'DEMO',
                  url: 'https://www.ipietech.com/demo/ipietech.com.html',
                  type: '',
                },
              ],
            },
          ],
        },
      },
    };
  },
  methods: {
    showDownload() {
      this.$notify({
        title: '下载pdf版简历',
        type: 'info',
        duration: 0,
        position: 'bottom-right',
        showClose: false,
      });
    },
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
