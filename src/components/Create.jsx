import React, { useContext, useState } from 'react'
import { CiCirclePlus } from "react-icons/ci";
import { Context } from '../context/Context';

function Create() {
    const { value, setValue, addData } = useContext(Context)



    function onSubmit(e) {
        e.preventDefault()
        if (value.trim() != "") {
            const newNote = {
                id: new Date().getTime().toString(),
                text: value,
                check:false,
            }
            addData(newNote)
            setValue("")
        }
    }

    return (
        <form onSubmit={onSubmit} >
            <div className='create'>
                <div className="container">
                    <div className="create__top" >
                        <input className='create__input' type="text" placeholder='Adicione uma nova tarefa' value={value} onChange={(e) => setValue(e.target.value)} />
                        <button className='create__button' type='submit'  >Criar<CiCirclePlus /></button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Create