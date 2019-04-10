<template>
    <div>
        <div>
            <el-checkbox-group v-model="checkboxGroup1">
                <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
        </div>
        <div style="margin-top: 20px">
            <el-checkbox-group v-model="checkboxGroup2" size="medium">
                <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
        </div>
        <div style="margin-top: 20px">
            <el-checkbox-group v-model="checkboxGroup3" size="small">
                <el-checkbox-button v-for="city in cities" :label="city" :disabled="city === '北京'" :key="city">
                    {{city}}
                </el-checkbox-button>
            </el-checkbox-group>
        </div>
        <div style="margin-top: 20px">
            <el-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
                <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
        </div>
        <el-autocomplete
                v-model="keyword"
                :fetch-suggestions="querySearchAsync"
                placeholder="请输入内容"
                @select="handleSelect"
        ></el-autocomplete>
    </div>
</template>
<script>
    import mixins from '../config/mixins'

    const cityOptions = ['上海', '北京', '广州', '深圳'];
    export default {
        data() {
            return {
                checkboxGroup1: ['上海'],
                checkboxGroup2: ['上海'],
                checkboxGroup3: ['上海'],
                checkboxGroup4: ['上海'],
                cities: cityOptions,
                keyword: ''
            };
        },
        mounted() {
        },
        methods: {
            querySearchAsync(queryString, cb) {
                this.$api.getProducts(queryString).then(res => {
                    cb(res.result);
                })
            },
        },
        mixins: [mixins]
    }
</script>