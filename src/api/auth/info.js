import axios from '../../utils/axios'
import {getChartName} from "../chart/chart";

export const getUserInfo = () =>{
    return axios.get('/getUserInfo')
}

const userInfoList = {
    getChartName
}
export default userInfoList