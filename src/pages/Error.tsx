const Error = () => {
    return (
        <div className="h-screen w-full flex flex-col gap-y-4 justify-center items-center">
            <div className="flex flex-col gap-y-2 items-center">
                <h1 className="text-red-500 text-6xl font-bold">404</h1>
                <h1 className="text-red-500 text-4xl font-bold">PAGE NOT FOUND</h1>
            </div>

            <p className="text-red-500 text-xl">Sorry, we couldn't find the page that you are looking for.</p>
        </div>
    )
}

export default Error