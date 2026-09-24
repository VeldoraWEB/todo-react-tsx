import tasksAPI from "@/shared/api/tasks"
import { useState, useEffect, } from "react"
import { Task } from "@/shared/api/tasks/local";

interface TaskPageProps {
    params: {
       id: string;
    }
}

const TaskPage = (props: TaskPageProps) => {

    const { params } = props
    const taskId = params.id

    const [task, setTask] = useState<Task | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        tasksAPI.getById(taskId)
          .then((taskData) => {
            setTask(taskData)
            setHasError(false)
          })
          .catch(() => {
            setHasError(true)
          })
          .finally(() => {
            setIsLoading(false)
          })

    }, [taskId])
    
    if (isLoading) {
        return <div>Loading..</div>
    }

    if (hasError || !task) {
        return <div>Task not found</div>
    }

    return (
        <div>
            <h1>{task.title}</h1>
            <p>{task.isDone ? 'Задача выполнена' : 'Задача не выполнена'}</p>
        </div>
    )
}

export default TaskPage