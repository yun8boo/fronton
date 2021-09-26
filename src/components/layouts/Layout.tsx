import { FC } from "react"
import { useAuth } from "@/hooks/useAuth"
import { LeftColumn } from "./LeftColumn"

export const Layout: FC = ({children}) => {
  const { user, supabase } = useAuth()
  return (
    !user ? (
      <main className='flex w-full bg-blue-50'>
        {children}
      </main>
    ): (
      <main className='flex w-full bg-blue-50'>
        <div className='w-64'>
          <LeftColumn user={user} logout={() => supabase.auth.signOut()} />
        </div>
        <div className='right-column'>
          {children}
        </div>
      </main>
    )
  )
}