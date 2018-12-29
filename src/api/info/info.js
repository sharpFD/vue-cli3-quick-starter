import service from '../../utils/axios'

export const getUserName = () => service.get(`/getUserName`)

const infoList = {
    getUserName
}
export default infoList