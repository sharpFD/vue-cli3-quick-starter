import service from '../../utils/axios'

export const getUserName = () => service.get(`/getUserName`)
// mock 数据
export const getMockData = (params) => {
    return new Promise((resolve, reject) => {
        resolve({
            code: 'A00000',
            data: '这是从接口获取的提示信息',
            msg: '成功'
        })
    })
}

const infoList = {
    getUserName,
    getMockData
}
export default infoList
