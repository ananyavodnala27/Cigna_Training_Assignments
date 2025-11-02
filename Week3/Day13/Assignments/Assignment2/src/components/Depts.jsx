
function Depts(){

    const deptsArray  =   [
            { Deptno:10,   Dname: "Accounts", Loc : "Hyd" } ,
            { Deptno:20,   Dname: "Sales", Loc : "Pune" } ,
            { Deptno:30,   Dname: "Admin", Loc : "Hyd" } ,
            { Deptno:40,   Dname: "Marketing", Loc : "Mumbai" }
           ] ;

    const deptsDisplay = deptsArray.map((dept) =>   <tr>
                                                        <td>{dept.Deptno}</td>
                                                        <td>{dept.Dname}</td>
                                                        <td>{dept.Loc}</td>
                                                    </tr>)

    return (
        <>
            <h2 style={{textAlign: "center"}}>Departments</h2>
            <p>This is the Depts page.</p>

            <table border="1" style={{borderCollapse : "collapse"}}>
                <thead>
                    <th>Dept No</th>
                    <th>Dept Name</th>
                    <th>Location</th>
                </thead>
                <tbody>
                    {deptsDisplay}
                </tbody>
            </table>

        </>
    )
}

export default Depts;