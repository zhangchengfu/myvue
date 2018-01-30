<template>
  <div id="pageQuiButton">
      <!-- 使用 -->
      <!-- 监听子组件的事件 -->
      <qui-btn msg="确定" class="small" v-on:btnClickEvent="doSth1"></qui-btn>
      <qui-btn msg="取消" class="small" v-on:btnClickEvent="doSth2"></qui-btn>
      <qui-btn class="small icon" msg="下载">
          <img slot="icon" class="ico" src="http://qzonestyle.gtimg.cn/aoi/sola/20170214175951_TA6qW1X7ob.png" />
      </qui-btn>
      <qui-btn class="middle" msg="原生点击" v-on:click.native="doTheClick"></qui-btn><!-- 原生的click而不是子组件的 -->
      <!-- <qui-btn class="middle" msg="子组件点击" v-on:click.native="doTheClick"></qui-btn> -->
  </div>
</template>

<script>
    import quiBtn from '../components/quiButton.vue' /* 引用 */
    export default {
        name : 'pageQuiButton',
        components : {
            'qui-btn' : quiBtn /*注册自定义标签*/
        },
        methods : {
            doSth1 : function() {
                alert('111');
            },
            doSth2 : function() {
                alert('222');
            },
            doTheClick : function() {
                alert('我是原生的click');
            }
        }
    }
</script>
