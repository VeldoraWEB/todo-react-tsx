import { createContext, ReactNode, useMemo } from "react";
import useTasks from "./useTasks";
import useIncompleteTaskScroll from "./useIncompleteTaskScroll";
import { Task } from "@/shared/api/tasks/local";

interface TasksContextType {
  tasks: Task[];
  filteredTasks: Task[];
  deleteTask: (id: string) => void;
  deleteAllTasks: () => void;
  toggleTaskComplete: (id: string, isDone: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  newTaskInputRef: any;
  addTask: (title: string) => void;
  disappearingTaskId: string | null;
  appearingTaskId: string | null;
  firstIncompleteTaskRef: any;
  firstIncompleteTaskId: string | null;
}

interface TasksProviderProps {
  children: ReactNode;
}

export const TasksContext = createContext<TasksContextType | null>(null)

export const TasksProvider = ({ children }:  TasksProviderProps) => {
    
    const {
      tasks,
      filteredTasks,
      deleteTask,
      deleteAllTasks,
      toggleTaskComplete,
      searchQuery,
      setSearchQuery,
      newTaskInputRef,
      addTask,
      disappearingTaskId,
      appearingTaskId,
    } = useTasks() as any

    const {
      firstIncompleteTaskRef,
      firstIncompleteTaskId,
    } = useIncompleteTaskScroll(tasks) as any

    const value = useMemo<TasksContextType>(() => ({
      tasks,
      filteredTasks,
      deleteTask,
      deleteAllTasks,
      toggleTaskComplete,
      searchQuery,
      setSearchQuery,
      newTaskInputRef,
      addTask,
      disappearingTaskId,
      appearingTaskId,
      firstIncompleteTaskRef,
      firstIncompleteTaskId,
    }), [
      tasks,
      filteredTasks,
      deleteTask,
      deleteAllTasks,
      toggleTaskComplete,
      searchQuery,
      setSearchQuery,
      newTaskInputRef,
      addTask,
      disappearingTaskId,
      appearingTaskId,
      firstIncompleteTaskRef,
      firstIncompleteTaskId,
    ])

    return (
      <TasksContext.Provider value={value}>
        {children}
      </TasksContext.Provider> 
    )
}