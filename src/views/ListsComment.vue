<template>
    <el-table :data="comments">
        <!-- 用户名列 -->
        <el-table-column prop="user" label="用户名" width="140">
        </el-table-column>
        <!-- 评论内容列 -->
        <el-table-column prop="content" label="评论内容" width="200">
        </el-table-column>
        <!-- 操作列 -->
        <el-table-column
                label="操作"
                width="200">
            <template slot-scope="scope">
                <el-button @click="edit(scope.row._id)" type="primary" size="small">编辑</el-button>
                <el-button @click="remove(scope.row._id)" type="danger" size="small">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        data() {
            return {
                comments: []
            }
        },
        methods: {
            //定义一个函数专门用于操作后重新获取数据
            fetchData() {
                this.$http.get('comments').then(res => {
                    this.comments = res.data
                })
            },
            edit(id) {
                this.$router.push('/comments/edit/'+id)
            },
            remove(id) {
                this.$http.delete('comments/' + id).then(res => {
                    this.$message({
                        showClose: true,
                        message: '评论删除成功',
                        type: 'success',
                        duration: 1000
                    })

                    this.fetchData()
                })
            }
        },
        created() {
            this.fetchData()
        }
    }
</script>

<style scoped>

</style>