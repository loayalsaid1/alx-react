import React from 'react';

export const defaultUser = {
	email: '',
	password: '',
	isLoggedIn: false,
}

export const defaultLogOut = () => {};

const UserContext = React.createContext({
	user: defaultUser,
	logOut: defaultLogOut
})

export default UserContext;
