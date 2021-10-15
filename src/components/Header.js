import React from 'react'
import './style/Header.css'
import { Search } from './Search'

export const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src="/img/logo.jpeg" alt="" width="150" height="150" />
                <p>statistic</p>
            </div>
            <div>
                <Search />
            </div>
        </div>
    )
}

export default Header
