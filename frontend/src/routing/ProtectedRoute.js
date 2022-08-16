import { useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  const { userInfo } = useSelector((state) => state.user);

  if (!userInfo) {
    return (
      <div className='unauthorized'>
        <h1>Not Authorized :(</h1>
        <span>
          <NavLink to='/login'>Login</NavLink> click to get access
        </span>
      </div>
    )
  }

  return <Outlet />
}

export default ProtectedRoute
