import React from 'react'

function List() {
    const students=[
        {
            id:1,
            name:'Tumininu',
            age:20,
            skill:'React'


        },

        {
            id:2,
            name:'Lawyer Kunle',
            age:37,
            skill:'javascript'
        },

        {
            id:3,
            name:'Isaac',
            age:27,
            skill:'CSS'
        }


    ]


    const studentAbilities=(students.map(student =>
        <h1>My name is {student.name}.I am {student.age} years old. I know {student.skill}</h1>
    ))
    return (
        <div>
           {studentAbilities}
        </div>
    )
}

export default List
