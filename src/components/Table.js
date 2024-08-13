import { useEffect, useState } from "react";

const Table = () => {
    const [tableInfo, setTableInfo] = useState([]);
    useEffect(() => {
        fetchData();
    },[])
    const fetchData = async() => {
        const tableData = await fetch("https://jsonplaceholder.typicode.com/users");
        const jsonTableData = await tableData.json();
        setTableInfo(jsonTableData);
        console.log(jsonTableData);
    }
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Website</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                        {tableInfo.map((user, index) => {
                            return <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.phone}</td>
                                <td>{user.email}</td>
                                <td>{user.website}</td>
                                <td>{user.address.city}</td>
                            </tr>
                        })}
                </tbody>
            </table>
        </div>
    )
}

export default Table;