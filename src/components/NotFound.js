import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return(
    <div className="center">
    <h1>A página procurada não foi encontrada!</h1>
    <Link to={"/"}>Voltar para Home Page</Link>
    </div>
  );
}

export default NotFound;