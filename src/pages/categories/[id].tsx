import { useRouter } from "next/router";

const CategoryId = () => {
  const { query } = useRouter()
  const { id } = query
  return (
    <h1>category: {id}</h1>
  )
}

export default CategoryId