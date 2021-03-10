
export const structuredProblemData = (array) => {
    return array.map(i=> {
      return {
        problemid: i.problemid,
        problemname: i.problemname,
        problemdescription:i.problemdescription,
        problemtype:i.problemtype.problemtype,
        status:i.status.status,
        project:i.project.projectname
      }
    })
  }

