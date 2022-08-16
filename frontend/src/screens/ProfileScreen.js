import { useSelector } from 'react-redux'
import '../styles/profile.css'

const ProfileScreen = () => {
  const { userInfo } = useSelector((state) => state.user)

  return (
    <div>      
      <span>
        Welcome <strong>{userInfo?.firstName}!</strong> - Sucessfully logged in.......
      </span>
    </div>
  )
}

export default ProfileScreen
