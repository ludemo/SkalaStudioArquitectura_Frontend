import { useParams } from 'react-router-dom'

export default function AlumnoProfile () {
  const { id } = useParams()
  return (
    <div>
      <div> el id encontrado es :  {id}</div>
    </div>
  )
}
