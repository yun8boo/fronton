import { useRouter } from "next/router";
import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/solid'

const Add = () => {
  const { query } = useRouter()
  const { id } = query

  if(!id) return null

  return (
    <div className="w-full flex flex-col p-4">
      <div className='flex justify-between items-center'>
        <Link href={`/categories/${id}`}>
          <a className='flex items-center'>
            <ChevronLeftIcon style={{height: 30, width: 30}} />
            <h2 className='text-2xl'>back</h2>
          </a>
        </Link>
        <button className='transition rounded-lg py-4 w-36 bg-indigo-400 text-center text-white hover:bg-indigo-300'>submit</button> 
      </div>
    </div>
  )
}

export default Add