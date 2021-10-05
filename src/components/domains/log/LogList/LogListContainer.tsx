import { useEffect, useState } from "react"
import { User } from "@supabase/gotrue-js"
import { supabase } from "@/libs/supabase/client"
import { LogList } from "./LogList"

interface Props {
  user: User
  categoryId?: string
}

export const LogListContainer = ({user, categoryId} : Props) => {
  const [logs, setLogs] = useState<any[] | null>()
  const [logsErr, setLogsErr] = useState<string | null>()
  const [category, setCategory] = useState<any | null>()
  const [categoryErr, setCategoryErr] = useState<string | null>()
  useEffect(() => {
    fetchLogs()
    categoryId && fetchCategories()
  }, [categoryId])
  const fetchLogs = async () => {
    const { data, error } = categoryId === undefined ? await supabase.from('logs').select().order('id', {ascending: true}) : await supabase.from('logs').select().eq('category_id', categoryId).order('id', {ascending: true})
    if(error) {
      return setLogsErr(error.message)
    }
    setLogs(data)
  }

  const fetchCategories = async () => {
    const { data, error } = await supabase.from('categories').select().eq('id', categoryId).order('id', {ascending: true})
    console.log({category: data});
    
    if(error) {
      return setCategoryErr(error.message)
    }
    if(data) {
      setCategory(data[0])
    }
  }

  const addLog = async(titleText: string, reviewText: string, categoryId: number) => {
    console.log({categoryId});
    
    const title = titleText.trim()
    const review = reviewText.trim()
    if (title.length) {
      const { data: todo, error } = await supabase
        .from('logs')
        .insert({ title, review, user_id: user.id, category_id: categoryId })
        .single()
      console.log({todo, error});
    } 
  }
  return <LogList logs={logs} err={logsErr} addLog={addLog} categoryId={categoryId} categoryName={category?.name} />
}