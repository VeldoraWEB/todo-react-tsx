import { useRef } from 'react'
import { Task } from '@/shared/api/tasks/local'

const useIncompleteTaskScroll = (tasks: Task[]) => {
    const firstIncompleteTaskRef = useRef<HTMLLIElement>(null)
    const firstIncompleteTaskId = tasks.find(({ isDone }) => !isDone)?.id

    return {
        firstIncompleteTaskRef,
        firstIncompleteTaskId,
    }
}

export default useIncompleteTaskScroll