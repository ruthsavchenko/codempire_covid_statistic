import React, {useContext} from 'react'
import { DataContext } from './DataProvider'

export const TableCountries = () => {
    const { countries } = useContext(DataContext)

    console.log(countries)

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Country</th>
                        <th>Total Confirmed</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        countries.map((item, i) => (
                            <tr key={i}>
                                <td>{item}</td>
                                <td>{item.Country}</td>
                                <td>{item.TotalConfirmed}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TableCountries