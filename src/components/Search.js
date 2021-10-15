import React, {useContext} from 'react'
import { DataContext } from './DataProvider'
import './style/Header.css'

export const Search = () => {
    const { handleSearch } = useContext(DataContext)

    return (
        <div className="search">
            <input
                type="text"
                placeholder="Search..."
                onChange={(event) => handleSearch(event)}
            />
        </div>
    )
}

export default Search
