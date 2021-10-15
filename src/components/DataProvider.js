import { ListItemIcon } from '@material-ui/core'
import React, { useState, useEffect, createContext } from 'react'

export const DataContext = createContext()

export const DataProvider = (props) => {
    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState(data)
    const [loading, setLoading] = useState(true)
    const [openModal, setOpenModal] = useState(false)
    const [countryDetails, setCountryDetails] = useState([]);
    console.log(filteredData)

    const closeModal = () => setOpenModal(false)

    const handleSearch = (event) => {
        let value = event.target.value.toLowerCase();
        console.log(value);
        let result = data.Countries.filter((data) => {
            return data.Country.search(value) !== -1;
        });
        console.log(1, result)
        setFilteredData({...filteredData, Countries: result});
    }

    const handleOpen = (id) => {
        const check = countryDetails.every(item => {
            return item.id !== id
        })
        if (check) {
            const countryData = data.Countries.filter(country => {
                return country.id === id
            })
            setCountryDetails([...countryDetails, ...data.Countries])
        }
        setOpenModal(true);
    };


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
                setFilteredData(data)
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
        <DataContext.Provider value={{ data, openModal, setOpenModal, closeModal, handleOpen, handleSearch, filteredData }}>
            {props.children}
        </DataContext.Provider>
    )
}
