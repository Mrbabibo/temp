import request from '../utils/customaxios';

const restfulApi = {

    // 获取gis数据
    getGeoData(params) {
        return request({
            url:'getMapsInfo',
            method: 'post',
            data: params
        });
    },
    // 方案查询
    queryPlanInfo() {
        return request({
            url:'queryPlanInfo',
            method: 'post',
            params: {}
        });
    },

    // 省际干线网络
    queryProvBaseBind(params) {
        return request({
            url: 'queryProvBaseBind',
            method: 'post',
            data: params
        });
    },
    //收寄量接口
    queryProvPostNum(params) {
        return request({
            url: 'queryProvPostNum',
            method: 'post',
            data: params
        });
    },		
    //处理量接口
    queryProvProcessNum(params) {
        return request({
            url: 'queryProvProcessNum',
            method: 'post',
            data: params
        });
    },	
   
    //投递量接口
    queryProvDlvNum(params) {
        return request({
            url: 'queryProvDlvNum',
            method: 'post',
            data: params
        });
    },
     //运输量接口
     queryTrafficNum(params) {
        return request({
            url: 'queryTrafficNum',
            method: 'post',
            data: params
        });
    },
     //省际网络干线时限对比
     queryProvTlmContrast(params) {
        return request({
            url: 'queryProvTlmContrast',
            method: 'post',
            data: params
        });
    },
    //成本指标接口
    queryProvCostIndex(params) {
        return request({
            url: 'queryProvCostIndex',
            method: 'post',
            data: params
        });
    },
   
    //组织方案接口
    queryOrganizationPlan(params) {
        return request({
            url: 'queryOrganizationPlan',
            method: 'post',
            data: params
        });
    }
    			

};

export default restfulApi;
