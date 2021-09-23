import React, {useContext} from 'react'
import { DataContext } from './DataProvider'

export const TableCountries = () => {
    const { data } = useContext(DataContext)

    console.log(data)

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
                        data.map((item, i) => (
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