import { Auth } from '@supabase/ui'
import { useAuth } from "@/hooks/useAuth"
import { LogList } from "@/components/domains/bookLog/LogList"

const RestaurantLogs = () => {
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
      <LogList user={user} />
    )}
  </div>
  )
}

export default RestaurantLogs