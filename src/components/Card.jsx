import React, { useContext, useState } from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import { Context } from '../context/Context';

function Card({data}) {
  const {delData,checkEdit} = useContext(Context)
  console.log(data);

  return (
    <>
    {data.map((todo)=>(
              <div className="card" key={todo.id}>
              <button className={todo.check ? "card__btn_active" : "card__btn "}  onClick={()=>checkEdit(todo)}><FaCheck/></button>
              <p className={todo.check ? "card__text_active" : "card__text"}>{todo.text}</p>
              <button className="card__del" onClick={()=>delData(todo.id)}><RiDeleteBin6Line/></button>
          </div>
    ))}
    </>
  )
}

export default Card