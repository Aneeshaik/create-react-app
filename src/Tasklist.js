const Tasklist = ({lists, deleteHandler}) => {
    return (
        <div>
            {lists.map((list, index) => (
                <div key={index}>
                    <p>{list} &nbsp;<button type="button" onClick={() => deleteHandler(index)}>Delete</button></p>
                </div>
                ))}
        </div>
    )
}

export default Tasklist;