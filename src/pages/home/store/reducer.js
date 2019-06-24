
import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: '社会热点',
        imgUrl: '//upload-images.jianshu.io/upload_images/5462150-e269cba9f41c3b48.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },{
        id: 2,
        title: '手绘',
        imgUrl: '//upload-images.jianshu.io/upload_images/15631385-0340eed7f48c9d96?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }]
});

//纯函数
//1。给定固定输入有固定输出
export default (state = defaultState, action) => {

    switch(action.type) {
        default: 
            return state;
    }
   
}