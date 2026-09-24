import { ForwardedRef } from "react"
const useCombinedRefs = (...refs: ForwardedRef<any>[]) => {
    return(node: HTMLElement | null) => {
        refs.forEach((ref) => {
            if (!ref) {
                return
            }
            if (typeof ref === 'function') {
                ref(node)
            } else {
                (ref as any).current = node
            }
        })
    }
}

export default useCombinedRefs