"use client"

export default function Error({error, reset}){
    return(
        <div>
            This is not loading {error.message}
        </div>
    )
}