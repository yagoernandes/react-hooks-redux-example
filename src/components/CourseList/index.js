import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

// Action creator, pode estar em outro arquivo
function addCourseAction (title) {
  return { type: 'ADD_COURSE', title }
}

export default function CourseList () {
  // useSelector passa todo o state do Redux
  // Pode receber um segundo parâmetro com arrays de variáveis para monitorar
  // Funciona como o segundo parâmetro do useEffect
  const courses = useSelector(state => state.data)
  // useDispatch para disparar actions
  const dispatch = useDispatch()
  const addCourse = () => {
    dispatch(addCourseAction('Teste'))
  }
  return (
    <div>
      <ul>
        {courses.map(course => (
          <li key={course}>{course}</li>
        ))}
      </ul>
      <button type='button' onClick={addCourse}>
        Adicionar item
      </button>
    </div>
  )
}
