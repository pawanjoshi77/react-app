import React, { useState } from 'react';
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";


interface Props {
    onClick: ()=> void;    
}


const Like = ({ onClick } : Props) => {

  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    console.log(status);
    onClick();
}

if(status)
 return <CiHeart size={70} onClick={toggle} />    
  return <FaHeart color= '#FFA500' size={70} onClick={toggle} />    
  
}

export default Like;