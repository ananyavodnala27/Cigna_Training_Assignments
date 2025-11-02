
function Employees(){

    const emps =  [
             {  empno : 10256, ename:"Scott", job: "Manager", deptno : 10  },
             {  empno : 10257, ename:"Smith", job: "Lead", deptno : 20  },
             {  empno : 10258, ename:"Sandy", job: "Programmer", deptno : 30  },
             {  empno : 10259, ename:"Sam", job: "Tester", deptno : 40  },
             {  empno : 10256, ename:"Scott", job: "Manager", deptno : 10  },
             {  empno : 10257, ename:"Smith", job: "Lead", deptno : 20  }
        ];

    const empsDisplay = emps.map((emp) =>   <tr>
                                                <td>{emp.empno}</td>
                                                <td>{emp.ename}</td>
                                                <td>{emp.job}</td>
                                                <td>{emp.deptno}</td>
                                            </tr>
    );

    return (
        <>
            <h2 style={{textAlign: "center"}}>Employee Details</h2>
            <p>This is the Employees page.</p>

            <table border="1" style ={{borderCollapse : "collapse"}}>
                <thead>
                    <tr>
                        <th>Emp Number</th>
                        <th>Emp Name</th>
                        <th>Emp Job</th>
                        <th>Emp Deptno</th>
                    </tr>
                </thead>
                <tbody>
                    {empsDisplay}
                </tbody>
            </table>

        </>
    )
}

export default Employees;