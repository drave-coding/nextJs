export default function UserPage({params} : any) {
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Abhishek</h1>
            <hr />
            <p className="text-4xl">Das Info
            <span className="p-2 rounded bg-orange-500 text-black ml-2">{params.id}</span>
            </p>
        </div>
    )
}