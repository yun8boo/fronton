interface Props {
  addTodo: (value: string) => Promise<void>
}

export const TodoList = ({ addTodo }: Props) => {
  return (
    <p>todo</p>
  )
}