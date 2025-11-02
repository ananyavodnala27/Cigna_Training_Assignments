import { Link, useParams } from "react-router-dom";

function Details()
{

    const { id }  = useParams();  // READS URL PARAMETER

     let empsArray =  [
             {  empno : 10256, ename:"Scott", job: "Manager", deptno : 10  },
             {  empno : 10257, ename:"Smith", job: "Lead", deptno : 20  },
             {  empno : 10258, ename:"Sandy", job: "Programmer", deptno : 30  },
             {  empno : 10259, ename:"Sam", job: "Tester", deptno : 40  },
             {  empno : 10256, ename:"Scott", job: "Manager", deptno : 10  },
             {  empno : 10257, ename:"Smith", job: "Lead", deptno : 20  },
             {  empno : 10258, ename:"Sandy", job: "Programmer", deptno : 30  },
             {  empno : 10259, ename:"Sam", job: "Tester", deptno : 40  },
        ];

    const empDetObj = empsArray.find((emp) => emp.empno == id);

    return (
            <>
                <h4>Employee {id} Details :</h4>
                <p>Employee Name : {empDetObj.ename}<br/>
                Job : {empDetObj.job}<br/>
                Dept No. : {empDetObj.deptno}</p>
        </>
    );
}

export default Details;