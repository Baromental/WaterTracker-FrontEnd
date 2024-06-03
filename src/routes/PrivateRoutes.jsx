// PrivateRoute.jsx
import React from 'react'
import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../redux/auth/authSlice'
import { Navigate, useLocation } from 'react-router-dom'

export const PrivateRoutes = ({ children }) => {
	const location = useLocation()
	const isLoggedIn = useSelector(selectIsLoggedIn)
	if (isLoggedIn) {
		return children
	}
	return <Navigate state={{ from: location }} to='/signin' />
}

export default PrivateRoutes;