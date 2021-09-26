import { User } from "@supabase/gotrue-js"

interface Props {
  user: User
  logout: () => Promise<{error: Error | null}>
}

export const LeftColumn = ({ user, logout }: Props) => {
  console.log(user);
  
  return (
    <div className='shadow h-screen bg-gray-50 relative'>
      <h1 className='py-8 w-full text-center text-3xl font-sans'>Fronton</h1>
      <ul className='mx-8'>
        <li
          role='button'
          className='transition rounded-lg py-4 w-full text-center font-sans hover:bg-indigo-400 hover:text-white'
        >
          TODO
        </li>
        <li
          role='button'
          className='transition rounded-lg py-4 w-full text-center font-sans hover:bg-indigo-400 hover:text-white'
          onClick={logout}
        >
          Logout
        </li>
      </ul>
      <div className='absolute flex bottom-0 items-center border-t-2 p-5 w-full'>
        <img src={user.user_metadata.avatar_url} alt="user icon" className=' rounded-full w-10 h-10' />
        <span className='ml-5'>{user.user_metadata.full_name}</span>
      </div>
    </div>
  )
}