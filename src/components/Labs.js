import React from 'react'
import { useNavigate } from 'react-router-dom';

const Labs = () => {
  const navigate = useNavigate();

  function clickHandler(){
    //move to about page
    navigate("/about");
  }

  function backHandler(){
    navigate(-1);
  }

  return (
    <div>
        <div>Labs</div>
        <button onClick={clickHandler}>Move to About Page</button>
        <br/>
        <button onClick={backHandler}>Go back</button>
    </div>
    
  )
}

export default Labs;