import React from 'react';
import CheckAuth from '../../Authentication/CheckAuth';
import './Header.css';
import labels from '../../../Labels.json'

function Header() {
    const isLogged = CheckAuth();
    console.log(labels.header_title)
    return (
        <header className="header">
            <nav className="header-top">
               { labels.header_title } 
            </nav>
            {/* TODO: Gestire voce di menu active 
                <a className="nav-link active" ...>
            */}
            <nav className="navbar navbar-expand-lg navbar-light navbar-top">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse navbar-container" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">{ labels.home_page }</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/richiesta">{  labels.new_request }</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/settore">{  labels.new_sector }</a>
                            </li>
                        </ul>
                        <span className="nav-item">
                            <a className="nav-link" href="/login">{ isLogged ? "Utente" : "Login" }</a>
                        </span>
                    </div>
                </div>
            </nav>

            <table className="table flag-container">
                <thead>
                    <tr>
                        <th className="flag-green"></th>
                        <th className="flag-white"></th>
                        <th className="flag-red"></th>
                    </tr>
                </thead>
            </table>
        </header>
    );
}

export default Header;
