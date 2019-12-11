import infoList from './info/info'
import chartList from './chart/chart'
import userInfoList from './auth/info'

const apiList = {
    ...infoList,
    ...chartList,
    ...userInfoList
}

export default apiList
