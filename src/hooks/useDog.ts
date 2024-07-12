import axios from 'axios'
import {reactive} from 'vue'

// 每个文件承担对应的功能，类似java的面向对象思想
// 每次的hook文件返回一个函数
export default function () : {dogImgs:string[],getDog:Function}{
    // 狗图
    const dogImgs:string[] = reactive([])

    const getDog = async () => {
        try {
            let {data: {message}} = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
            dogImgs.push(message)
        }catch (e) {
            alert(e)
        }
    }

    return {
        dogImgs,
        getDog
    }
}
