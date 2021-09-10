import React from 'react'
import './landingpage.css';

export default function landingpage() {
    return (
        <div className="page-1">
            <header>
                <div className="item-left">
                    CodeNet
                </div>
                <div className="item-center">
                    <ul>
                        <li>LoveBabber Sheet</li>
                        <li>Striver Sheet</li>
                        <li>Faraz Sheet</li>
                    </ul>
                </div>
                <div className="item-right">
                    <ul>
                        <li>SignUp</li>
                        <li>Login</li>
                    </ul>
                </div>
            </header>
            <div className="container-1">
                <div className="menu">
                    <ul className="list-items">
                        <li className="list">Array</li>
                        <li className="list">Stack</li>
                        <li className="list">Graph</li>
                        <li className="list">Queue</li>
                    </ul>
                </div>
                <div className="container">
                    <div className="card">
                        
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, quae?</div>
                        <div className="progressbar">
                            <div class="circular">
                                <div class="inner"></div>
                                <div class="number">100%</div>
                                <div class="circle">
                                    <div class="bar left">
                                        <div class="progress"></div>
                                    </div>
                                    <div class="bar right">
                                        <div class="progress"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, quisquam.
                    </div>
                    <div className="card">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, quisquam.
                    </div>

                </div>
            </div>
            <div className="footer"></div>
        </div>
    )
}
