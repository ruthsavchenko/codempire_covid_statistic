import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios';

export const DataContext = createContext()

export const DataProvider = (props) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        fetch('https://api.covid19api.com/summary')
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            throw response
        })
        .then(data => {
            setData(data)
            console.log(data)
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
        })
        .finally(() => {
            setLoading(false)
        })
    }, [])

    if (loading) {
        return <div>"Loading..."</div>;
    }

    return (
        <DataContext.Provider value={{ data }}>
            {props.children}
        </DataContext.Provider>
    )
}
