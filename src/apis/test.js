import  httpIntrance  from '@/utils/http'

export function getCatogry(){
    return httpIntrance({
        url:'home/category/head'
    })
}