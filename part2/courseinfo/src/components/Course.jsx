const Header = (props) => {
  
  return(
    <h1>{props.course.name}</h1>
  )
}

const Part = (props) => {
  return <p>{props.part.name} {props.part.exercises}</p>
}

const Content = (props) => {
  return(
    <div>
      {props.parts.map(part => 
        <Part part={part} key={part.id}/>
      )}
    </div>
  )
}

const Total = (props) =>{
  return(
    <p>Number of {props.parts.reduce((sum, current) => sum + current.exercises,0)} exercises
    </p>
  )
}

const Course = ({course}) => (
  <div>
    <Header course={course} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
)

export default Course