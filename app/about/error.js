"use client"

export default function Error({error, reset}){
    return(
        <div>
            This ain't loading {error.message}
        </div>
    )
}