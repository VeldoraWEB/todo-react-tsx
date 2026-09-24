const STORAGE_KEY = 'tasks'

export interface Task {
    id: string;
    title: string;
    isDone: boolean;
    [key: string]: any;
}

const read = (): Task[] => {
    try {
       return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    } catch (error)  {
        return []
    }
}

const write = (tasks: Task[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
}

const delay = (ms = 150) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

const localAPI = {
    getAll: async (): Promise<Task[]> => { 
        await delay()
        return read()
    },

    getById: async (id: string): Promise<Task | null> => {
        await delay()
        return read()
          .find(task => task.id === id) ?? null
    },

    add: async (task: Partial<Task>): Promise<Task> => {
        await delay()

        const newTask: Task = {
            title: '',
            isDone: false,
            ...task,
            id: crypto?.randomUUID() ?? Date.now().toString()
        }

        write([...read(), newTask])
        return newTask
    },

    delete: async (id: string): Promise<void> => {
        await delay()

        const tasks = read().filter((task) => task.id !== id)

        write(tasks)


    },

    deleteAll: async (): Promise<void> => {
        await delay()

        write([])

    },

    toggleComplete: async (id: string, isDone: boolean): Promise<void> => {
        await delay()

        const tasks = read()
           .map((task) => {
              return task.id === id ? {...task, isDone} : task
           })

        write(tasks)
    }
}

export default localAPI