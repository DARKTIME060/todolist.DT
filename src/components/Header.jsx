import React, { useContext, useEffect } from 'react'
import { LuClipboardEdit } from "react-icons/lu";
import Card from './Card';
import { Context } from '../context/Context';
import Loader from './Loader';

function Header() {
    const { data, setValue, loading, setLoading} = useContext(Context)

    useEffect(() => {
        fetch(data)
        .then((res)=>res.json())
        .then((data) => {
            setValue(data)
            setLoading(false)
        })
            .catch((error) => {
                console.log(error)
                setLoading(false)
            })
    }, [])
    return (
        <div className='header'>
            <div className="container">
                <div className="header__top">
                    <div className='header__left'>
                        <p className='header__top-title'>Tarefas criadas</p>
                        <span>{data.length}</span>
                    </div>

                    <div className='header__right'>
                        <p className='header__top-text'>Concluídas</p>
                        <span>{data.filter(data => data.check).length} de {data.length}</span>
                    </div>
                </div>
                {
                    loading ? <Loader /> : data.length <= 0 ? (
                        <>
                            <div className="header__bottom">
                                <div className="header__bottom-info " >
                                    <LuClipboardEdit className='header__bottom-icon' />
                                    <p className="header__bottom-title">Você ainda não tem tarefas cadastradas</p>
                                    <p className="header__bottom-text">Crie tarefas e organize seus itens a fazer</p>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                        <Card data={data}/>
                        </>
                    )
                }

            </div>

        </div >
    )
}

export default Header