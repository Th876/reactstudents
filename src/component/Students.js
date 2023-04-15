/*
Code the <Student>component so that it:
1) Renders the student's name& bio properties
2) Renders a <Score>component for each score object in the student's scores property.
*/

//Import score component 
import Score from "./Score";
// 
export default function Students(props) {
  return (
      <div className="std-list">
        <h1 className="heading">Student Information</h1>
          <p className="name">Name: {props.name}</p>
          <p className="bio"> Biography: {props.bio}</p>
          {
            props.scores.map((scoredetails, index) => {
              return (
                <div key={index}>
                  <Score scores={scoredetails}/>
                  </div>
              )
            })
          }
      </div>
  )
}
