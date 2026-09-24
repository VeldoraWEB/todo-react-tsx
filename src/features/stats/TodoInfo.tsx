import { memo, useContext, useMemo } from 'react'
import { TasksContext } from '@/entities/todo'

interface TodoInfoProps {
  styles: Record<string, string>;
}

const TodoInfo = (props: TodoInfoProps) => {
    const { styles } = props
    const {
      tasks,
      deleteAllTasks,
    } = useContext(TasksContext) as any

    const total = tasks.length

    const hasTasks = total > 0

    const done = useMemo(() => {
       return tasks.filter((task: any) => task.isDone).length
    }, [tasks]) 
    
    return (
      <div className={styles.info}>
        <div className={styles.totalTasks}>
          Done {done} from {total}
        </div>
        {hasTasks && (
          <button 
             className={styles.deleteAllButton}
             type="button"
             onClick={deleteAllTasks}
          >
             Delete all
          </button>
        )}
      </div>
    )
}

export default memo(TodoInfo)