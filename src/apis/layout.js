import httpIntrance from '@/utils/http'

export function getCategoryApi(){
    return httpIntrance({
        url:"/home/category/head"
    })
}