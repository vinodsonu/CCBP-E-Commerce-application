import Cookie from 'js-cookie';

const setCookie = (key, value)=> {
    Cookie.set(key, value, {
       expires: 30,
       path: '/'
    })
 }

const getCookie = () => {
   const token = Cookie.get('jwt_token')
    return token
}
 export {setCookie,getCookie}