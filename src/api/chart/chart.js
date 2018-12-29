import service from '../../utils/axios'

export const getChartName = () => service.get(`/getChartName`)

const chartList = {
    getChartName
}
export default chartList