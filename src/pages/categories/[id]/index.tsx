import { Auth } from '@supabase/ui'
import { useRouter } from "next/router";
import { useAuth } from "@/hooks/useAuth"
import { LogList } from "@/components/domains/log/LogList"

const CategoryId = () => {
  const { supabase ,user } = useAuth()
  const { query } = useRouter()
  const { id } = query

  if(!id) return null

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
      <LogList user={user} categoryId={id as string} />
    )}
  </div>
  )
}

export default CategoryId