<template>
    <div id="tools">
        <div class="container" id="main" role="main">
            <div class="row">
                <div class="col-lg-3">
                    <div style="position: sticky; top: 1rem;" >
                        <div class="fs-2 fw-bold w-100 text-start">Twitter Monitor</div>
                        <div class="mb-3" style="padding-left: 5px"><local-router /></div>
                        <el-divider class="my-2" />
                        <div class="mb-2 text-muted"><small>NEST.MOE</small></div>
                    </div>
                </div>
                <div v-if="$route.name === 'tool-main-page'" class="col-lg-9 mt-2 row">
                    <div class="col-md-6 mb-2" v-for="item in linkList" :key="item.name">
                        <a v-if="item.link.startsWith('https://')||item.link.startsWith('http://')" :href="item.link" target="_blank" style="text-decoration: none">
                            <div class="card">
                                <div class="card-body text-black">
                                    <h2>{{ item.name }}</h2>
                                    <p >{{ item.description }}</p>
                                </div>
                            </div>
                        </a>
                        <router-link v-else :to="item.link" style="text-decoration: none">
                            <div class="card">
                                <div class="card-body text-black">
                                    <h2>{{ item.name }}</h2>
                                    <p >{{ item.description }}</p>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
                <div v-else class="col-lg-9 mt-2">
                    <router-view />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import LocalRouter from "../../components/LocalRouter.vue";
import {useHead} from "@vueuse/head";

useHead({
  title: 'Tools',
})

const linkList = [{
  link: "https://twmedia.nest.moe",
  name: "Twitter Media",
  description: "Download Image / Videos / Spaces audio"
},{
  link: "https://banka2017.github.io/twitter-monitor/apps/online_tools/snowflake.html",
  name: "SnowFlake Tool",
  description: "Tiny tool for twitter snowflake"
},{
    link: "https://archive-viewer.nest.moe/",
    name: "Archive viewer",
    description: "Backup and view tweets/following/followers"
},]
//{
//  link: "/i/tools/translator",
//  name: "烤推机",
//  description: "人工翻译工具"
//}
</script>

<style scoped>

</style>