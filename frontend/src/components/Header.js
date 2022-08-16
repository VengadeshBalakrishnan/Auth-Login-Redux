import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getUserDetails } from '../features/user/userActions'
import { logout } from '../features/user/userReducer'
import '../styles/header.css'

const Header = () => {
  const { userInfo, userToken } = useSelector((state) => state.user)
  const dispatch = useDispatch()

 useEffect(() => {
    if (userToken) {
      dispatch(getUserDetails())
    }
  }, [userToken, dispatch])

  return (
    <header>
      <div className='header-status'>
        <span>
          {userInfo ? `Logged in as ${userInfo.email}` : "Not Logged In...."}
        </span>
        <div className='cta'>
          {userInfo ? (
            <button className='button' onClick={() => dispatch(logout())}>
              Logout
            </button>
          ) : (
            <NavLink className='button' to='/login'>
              Login
            </NavLink>
          )}
        </div>
      </div>
      <nav className='container navigation'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/register'>Signup</NavLink>
      </nav>
    </header>
  )
}

export default Header
