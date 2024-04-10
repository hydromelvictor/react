import { Outlet, Link, useParams } from 'react-router-dom'

function Survey() {

  // On récupère le paramètre questionNumber avec useParams qui est un hook 
  // de react-router-dom retourne un objet contenant les paramètres de l'URL de type string
  const { questionNumber } = useParams()
  return (
    <div>
      <h1>Questionnaire 🧮 { questionNumber }</h1>
      <Link to="client">Questionnaire Client</Link>
      <Link to="freelance">Questionnaire Freelance</Link>
      <Outlet />
    </div>
  )
}
export default Survey
