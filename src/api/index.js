import infoList from './info/info'
import chartList from './chart/chart'
import userInfoList from './auth/info'
import productList from './product/product'

const apiList = {
    ...infoList,
    ...chartList,
    ...userInfoList,
    ...productList
}

export default apiList