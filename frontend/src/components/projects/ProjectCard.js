import React from 'react'
import {projectsData} from './fakeProjectData'

function ProjectCard() {
    return (
        <>
            {projectsData.map((item, index) => {
                return (
                    <div className='project-card' key={index}>
                        <span>{item.name}</span>
                        <span>{item.description}</span>
                        <span>{item.team_members.length}</span>
                        <span>{item.date_created}</span>
                    </div>
                )
            })}
        </>
    )
}

export default ProjectCard
