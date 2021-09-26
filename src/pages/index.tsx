import type { NextPage } from 'next'
import { Auth } from '@supabase/ui'
import { useAuth } from '@/hooks/useAuth';
import { TodoList } from '@/components/domains/todo/TodoList';

const Home: NextPage = () => {
  const { supabase ,user } = useAuth()
  return (
    <div className="w-full h-full">
    {!user ? (
      <div
        className="w-screen h-screen flex justify-center items-center p-4"
        style={{ minWidth: 250, maxWidth: 500, margin: 'auto' }}
      >
        <Auth
          supabaseClient={supabase}
          providers={['google']}
          socialLayout="horizontal"
          socialButtonSize="xlarge"
        />
      </div>
    ) : (
      <div
        className="w-full h-full flex flex-col justify-center items-center p-4"
        style={{ minWidth: 250, maxWidth: 600, margin: 'auto' }}
      >
        <TodoList user={user} />
        <button
          className="btn-black w-full mt-12"
          onClick={async () => {
            const { error } = await supabase.auth.signOut()
            if (error) console.log('Error logging out:', error.message)
          }}
        >
          Logout
        </button>
      </div>
    )}
  </div>
  )
}

export default Home
