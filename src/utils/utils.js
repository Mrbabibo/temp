
export const mixin = {
    data() {
        return {
            mixinData: 123
        }
    },
    methods: {
        changeZoom(id){
            var self = this
           commonMap[id].on('zoomend', async function(e) {
               var target = e.target
               var zoom = target.getZoom()
           
               if(zoom>=5 && !commonMap[id].hasLayer(commonMap[id+'citylayerGeo'])){
                   self.setScale('city',id)
               }else if(zoom <5){ // && !commonMap[id].hasLayer(commonMap[id+'prolayerGeo'])
                   // self.setScale(commonMap[id+'citylayerGeo'],'provice',id)
                     // 删除之前图层
                   if(commonMap[id].hasLayer(commonMap[id+'citylayerGeo'])){
                       commonMap[id].removeLayer(commonMap[id+'citylayerGeo']);		
                   }
               }
           });
       },
    }
}