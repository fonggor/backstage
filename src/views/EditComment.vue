<template>
    <el-form @submit.native.prevent="editComment" ref="form" :model="comment" label-width="80px">
        <el-form-item label="用户">
            <el-input v-model="comment.user"></el-input>
        </el-form-item>

        <el-form-item label="评论内容">
            <el-input type="textarea" v-model="comment.content"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" native-type="submit">保存并发表</el-button>
            <el-button @click="backToList">取消</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        data() {
            return {
                comment: {
                    user: '',
                    content: ''
                }
            }
        },
        methods: {
            editComment() {
                this.$http.put('comments/edit/'+this.$route.params.id, this.comment).then(res => {
                    this.$message({
                        showClose: true,
                        message: '评论修改成功',
                        type: 'success'
                    })

                    this.$router.push('/')
                })
            },
            backToList(){
                this.$router.push('/')
            }
        },
        created() {
            this.$http.get('comments/edit/' + this.$route.params.id).then(res => {
                this.comment = res.data
            })
        }
    }
</script>

<style scoped>

</style>