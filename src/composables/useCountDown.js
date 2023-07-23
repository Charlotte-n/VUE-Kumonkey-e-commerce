import {ref} from "vue"
import dayjs from "dayjs";
import {computed,onUnmounted} from "vue";
//封装倒计时的函数

export const CountDown = ()=>{
    let timer = null
    const time = ref(0)
    const formateTime = computed(()=> //把当前时间转化为秒
        dayjs.unix(time.value).format("mm分ss秒")
    )
    function start(currentTime){
        time.value = currentTime
        //开启定时器
        //每隔一秒减一
        timer= setInterval(()=>{
            time.value--
        },1000)
    }
    //销毁定时器
    onUnmounted(()=>clearInterval(timer))

    return {
        formateTime,
        start
    }
}