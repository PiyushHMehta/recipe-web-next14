import { Skeleton } from "@/components/ui/skeleton"

function Loading() {
    return (
        <div className="w-full min-h-screen bg-black">
            <Skeleton />
        </div>
    )
}

export default Loading