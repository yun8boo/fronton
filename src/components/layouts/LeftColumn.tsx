import { useEffect, useState } from "react"
import Link from 'next/link'
import { supabase } from "@/libs/supabase/client"
import { User } from "@supabase/gotrue-js"

interface Props {
  user: User
  logout: () => Promise<{error: Error | null}>
}

export const LeftColumn = ({ user, logout }: Props) => {
  const [categories, setCategories] = useState<any[] | null>()
  const [err, setErr] = useState<string | null>()
  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    const { data, error } = await supabase.from('categories').select().order('id', {ascending: true})
    if(error) {
      return setErr(error.message)
    }
    setCategories(data)
  }

  const addCategory = async({name}: {name: string}) => {
    const { data: category, error } = await supabase
      .from('categories')
      .insert({ name: 'movie', user_id: user.id })
      .single()
    console.log({category, error});
  }
  
  return (
    <div className='shadow h-screen bg-gray-50 relative'>
      <h1 className='py-8 w-full text-center text-3xl font-sans'>Fronton</h1>
      <ul className='mx-8'>
        {
          categories?.map(category => (
            <li
              key={category.id}
              role='button'
              className='transition rounded-lg py-4 w-full text-center font-sans hover:bg-indigo-400 hover:text-white'
            >
              <Link href={`/categories/${category.id}`}>
                <a>
                  {category.name} Logs
                </a>
              </Link>
            </li>
          ))
        }
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