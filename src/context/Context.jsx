import React, { createContext, useEffect, useState } from 'react'

export const Context = createContext()

function ContextProvider({ children }) {


    function getStorage() {
        let data = localStorage.getItem("notes")
        if (data) {
            return JSON.parse(localStorage.getItem("notes"))
        } else {
            return []
        }
    }

    const [loading, setLoading] = useState(true)
    const [value, setValue] = useState('')
    const [data, setData] = useState(getStorage)



    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(data))
    }, [data])

    function addData(newData) {
        setData([newData,...data])
    }
    function delData(id) {
        setData(data.filter(item => item.id != id))
    }
    function checkEdit(el) {
        setData(data.map((item)=>item.id == el.id ? {...item,check:!item.check} : {...item}))
    }




    return (
        <Context.Provider value={{ value, setValue, data,setData, loading, setLoading,delData,addData,checkEdit}}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider