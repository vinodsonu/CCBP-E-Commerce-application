import Cookies from 'js-cookie';

const setCookie = (key, value)=> {
    Cookies.set(key, value, {
       expires: 30,
       path: '/'
    })
 }

const getCookie = () => {
   const token = Cookies.get('jwt_token')
    return token
}
 export {setCookie,getCookie}