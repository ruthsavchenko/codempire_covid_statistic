import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios';

export const DataContext = createContext()

export const DataProvider = (props) => {
    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(true)
    

    const getData = () => {
        axios.get('https://api.covid19api.com/summary')
            .then(response => {
                setCountries(response.data)
                console.log(response.data)
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            })
            .finally(() => {
                setLoading(false)
            })
    }

    useEffect(() => {
        getData();
    }, [])

    if (loading) {
        return <div>"Loading..."</div>;
    }

    return (
        <DataContext.Provider value={{ countries }}>
            {props.children}
        </DataContext.Provider>
    )
}
