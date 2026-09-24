import localAPI from "./local";
import serverAPI from './server'

const isLocal = (import.meta.env.VITE_STATIC_BACKEND as string) === 'true' 

const tasksAPI = isLocal ? localAPI : serverAPI

export default tasksAPI