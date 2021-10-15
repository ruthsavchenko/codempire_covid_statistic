import React, {useContext} from 'react'
import { DataContext } from './DataProvider'
import './style/TableCountries.css'
import { Modal } from './Modal'

export const TableCountries = () => {
    const { data, openModal, setOpenModal, handleOpen, filteredData } = useContext(DataContext)

    console.log(filteredData)

    return (
        <div>
            {openModal && <Modal  />}
            <table className="TableCountries">
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Country</th>
                        <th>Total Confirmed</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredData.Countries.map((countryObj, index) => (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td onClick={() => handleOpen(data.Countries.id)} style={{cursor: 'pointer'}}>{countryObj.Country}</td>
                                <td>{countryObj.TotalConfirmed}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TableCountries