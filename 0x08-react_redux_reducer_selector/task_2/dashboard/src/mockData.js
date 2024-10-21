export const mockUserContextValue = {
	user: {
		email: 'test@email.com',
		password: 'remindme-l.vercel.app',
		isLoggedIn: true,
	},
	logOut: () => {}
}

export const mockLoggedOutUserContextValue = {
	user: {
		email: '',
		password: '',
		isLoggedIn: false,
	},
	logOut: () => {}
}

export const mockListNotifications = [
	{ id: 1, type: "default", value: "New course available" },
    { id: 2, type: "default", value: "New resume available" },
    { id: 3, type: "urgent", value: "New whatever" },
]
