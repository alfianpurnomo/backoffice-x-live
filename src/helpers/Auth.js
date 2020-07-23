import Cookies from 'js-cookie'

const TOKEN = process.env.REACT_APP_USER_TOKEN
const INFO = process.env.REACT_APP_USER_INFO

export const setToken = tokenId => {
	Cookies.set(TOKEN, tokenId)
}

export const getToken = () => {
	return Cookies.get(TOKEN)
}

export const isLoggedIn = () => {
	return !!getToken()
}

export const setUserInfo = userInfo => {
	Cookies.set(INFO, userInfo)
}

export const getUserInfo = () => {
	return Cookies.get(INFO) && JSON.parse(Cookies.get(INFO))
}

export const logout = () => {
	Cookies.remove(TOKEN)
	Cookies.remove(INFO)
}