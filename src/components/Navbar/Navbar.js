import React, { useState } from 'react'
import SearchForm from "../../components/SearchForm/SearchForm"


const Navbar = () => {

    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="/">Weather App</a>
                <div className="mx-auto">
                    <SearchForm/>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
