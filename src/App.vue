<template>
    <div id="app">
        <el-container style="height: 100vh; border: 1px solid #eee">
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <!-- 左侧导航菜单 -->
                <el-menu router :default-openeds="['1']">
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-tickets"></i>内容管理</template>
                        <el-menu-item-group>
                            <el-menu-item index="/comments/lists">评论列表</el-menu-item>
                            <el-menu-item index="/comments/create">新建评论</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-aside>

            <el-container>
                <el-header style="text-align: right; font-size: 12px">
                    <!-- 点击右上角弹出的三个选项 -->
                    <el-dropdown>
                        <i class="el-icon-setting" style="margin-right: 15px"></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>查看</el-dropdown-item>
                            <el-dropdown-item>新增</el-dropdown-item>
                            <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span>王小虎</span>
                </el-header>

                <!-- 信息展示部分 -->
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {

    };
</script>

<style>
    html, body {
        margin: 0;
        padding: 0;
    }

    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }
</style>
