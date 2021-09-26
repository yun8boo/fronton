import { useEffect } from "react"
import { User } from "@supabase/gotrue-js"
import { supabase } from "@/libs/supabase/client"
import { TodoList } from "./TodoList"

interface Props {
  user: User
}

export const TodoListContainer = ({user} : Props) => {
  useEffect(() => {
    fetchTodos()
  }, [])
  const fetchTodos = async () => {
    const { data: todos, error } = await supabase.from('todos').select('*').order('id', {ascending: true})
    console.log({todos, error});
    
  }

  const addTodo = async(taskText: string) => {
    const task = taskText.trim()
    if (task.length) {
      const { data: todo, error } = await supabase
        .from('todos')
        .insert({ task, user_id: user.id })
        .single()
      console.log(todo);
    } 
  }
  return <TodoList addTodo={addTodo} />
}