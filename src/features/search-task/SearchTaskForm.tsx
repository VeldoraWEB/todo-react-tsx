import { useContext } from "react"
import Field from "@/shared/ui/Field"
import { TasksContext } from "@/entities/todo"


interface SearchTaskFormProps {
  styles: Record<string, string>;
}


const SearchTaskForm = (props: SearchTaskFormProps) => {
    const { styles } = props

    const {
      searchQuery,
      setSearchQuery,
    } = useContext(TasksContext) as any
    return (
      <form 
      className={styles.form}
      onSubmit={(event) => event.preventDefault()}>
        <Field 
          className={styles.field}
          label="Search task"
          id="search-task"
          type="search"
          value={searchQuery}
          onInput={(event: any) => setSearchQuery(event.target.value)}
        />
      </form>
    )
}

export default SearchTaskForm