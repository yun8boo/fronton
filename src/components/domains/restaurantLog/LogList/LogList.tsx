import Link from 'next/link'
import { SearchIcon } from '@heroicons/react/solid'
import { LogCard } from '../LogCard'

interface Props {
  logs: any[] | null | undefined
  err: string | null | undefined
  addLog: (titleText: string, reviewText: string) => Promise<void>
}

export const LogList = ({ logs, err, addLog }: Props) => {
  if(err) {
    return (
      <p>{err}</p>
    )
  }
  if(!logs) {
    return (
      <p>loading...</p>
    )
  }

  if(!logs.length) {
    return (
      <div
        className="w-full h-full flex flex-col justify-center items-center p-4"
        style={{ minWidth: 250, maxWidth: 600, margin: 'auto' }}
      >
        <button onClick={() => addLog('ミッドサマー', '3.8/5')} className='transition rounded-lg py-4 w-full bg-indigo-400 text-center text-white hover:bg-indigo-300'>Add movie log</button>
      </div>  
    )
  }
  return (
    <div
      className="w-full flex flex-col p-4"
    >
      <div className='flex justify-between items-center'>
        <h2 className='text-2xl'>Restaurant Logs</h2>
        <Link href="/movie_logs/add">
          <a className='transition rounded-lg py-4 w-36 bg-indigo-400 text-center text-white hover:bg-indigo-300'>
            add
          </a>
        </Link>
      </div>
      <div className='flex mt-8 shadow rounded-lg p-1 bg-white'>
        <input className="w-full rounded p-2" type="text" placeholder="Search movie title" />
        <button className="w-auto flex justify-end items-center text-indigo-400 p-2">
          <SearchIcon style={{height: 24, width: 24}} />
        </button>
      </div>
      <div className="mt-8">
        <ul className='flex flex-wrap'>
          {logs.map(log => (
            <li className='mx-1 mb-1' key={log.id}><LogCard log={log} /></li>
          ))}
        </ul>
      </div>
    </div>
  )
}