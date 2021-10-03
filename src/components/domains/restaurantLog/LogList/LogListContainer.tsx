import { useEffect, useState } from "react"
import { User } from "@supabase/gotrue-js"
import { supabase } from "@/libs/supabase/client"
import { LogList } from "./LogList"

interface Props {
  user: User
}

export const LogListContainer = ({user} : Props) => {
  const [logs, setLogs] = useState<any[] | null>()
  const [err, setErr] = useState<string | null>()
  useEffect(() => {
    fetchTodos()
  }, [])
  const fetchTodos = async () => {
    const { data, error } = await supabase.from('logs').select('*').order('id', {ascending: true})
    if(error) {
      return setErr(error.message)
    }
    setLogs(data)
    
  }

  const addLog = async(titleText: string, reviewText: string) => {
    console.log(user);
    
    const title = titleText.trim()
    const review = reviewText.trim()
    if (title.length) {
      const { data: todo, error } = await supabase
        .from('logs')
        .insert({ title, review, user_id: user.id })
        .single()
      console.log({todo, error});
    } 
  }
  return <LogList logs={logs} err={err} addLog={addLog} />
}