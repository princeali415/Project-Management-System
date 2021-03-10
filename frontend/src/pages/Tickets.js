import React, {useState, useEffect} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import {structuredProblemData} from '../utils/structureProblemData'




function Tickets(props) {

    const [userInfo, setUserInfo] = useState({});
    const [problems, setProblems] = useState([])

    useEffect(() => {
        axiosWithAuth()
        .get("/users/getuserinfo")
        .then(res => {
            setUserInfo(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    let problemsArr = userInfo.problems;
    
    // const structuredProblemData = async (array) => {
    //     const rows = await array.map(i=> {
    //       return {
    //         problemid: i.problemid,
    //         problemname: i.problemname,
    //         problemdescription: i.problemdescription,
    //         problemtype: i.problemtype.problemtype,
    //         status: i.status.status,
    //         project: i.project.projectname
    //       }
    //     })
    //     return setProblems(rows)
    //   }
    //   structuredProblemData(problemsArr)

    //   console.log(problems)

    return (
        <div>
            <h1>Tickets</h1>
        </div>
    )
}

export default Tickets
