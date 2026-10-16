const Bio = ({name, username}) => {
    return (
        <header>
                <div>
                    <h2 className="text-6xl font-bold">{name}</h2>
                    <p className="text-lg text-[#FA8112]">{username}</p>
                </div>
                <p className="mt-3 text-2xl">Front-end developer from Cebu City.</p>
        </header>
    )
}

export default Bio;