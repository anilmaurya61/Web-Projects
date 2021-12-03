import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import './landingpage.css';

export default function landingpage() {
    return (
        <>
            <img className="big-circle" src="./img/big-eclipse.svg" alt="" />
            <img className="mid-circle" src="./img/mid-eclipse.svg" alt="" />
            <img className="small-circle" src="./img/small-eclipse.svg" alt="" />
            <header>
                <div className="logo-container">
                    <img src="./img/logo.svg" alt="logo" />
                    <h1 className="logo">CodeNet</h1>
                </div>
                <nav>
                    <ul className="nav-links">
                        <li><a className="nav-link" href="#">Love Babber Sheet</a></li>
                        <li><a className="nav-link" href="#">Striver Sheet</a></li>
                        <li><a className="nav-link" href="#">Faraz Sheet</a></li>
                    </ul>
                </nav>
                <div className="account">
                         <AccountCircleRoundedIcon/>
                </div>
            </header>

            <main>
                <section className="presentation">
                    <div className="introduction">
                        <div className="intro-text">
                            <h1>Welcome To CodeNet</h1>
                            <p>
                                ................
                            </p>
                        </div>
                        <div className="cta">
                            <button className="cta-select">Login</button>
                            <button className="cta-add">SignUp</button>
                        </div>
                    </div>
                    <div className="cover">
                        <img src="./img/matebook.png" alt="matebook" />
                    </div>
                </section>

                <div className="laptop-select">
                    <img src="./img/arrow-left.svg" alt="" />
                    <img src="./img/dot.svg" alt="" />
                    <img src="./img/dot-full.svg" alt="" />
                    <img src="./img/dot-full.svg" alt="" />
                    <img src="./img/arrow-right.svg" alt="" />
                </div>


            </main>

            {/* ............................................................. */}
            <div className="services"></div>
            <div class="teamWrapper">
                <div class="container">
                    <h1 align="center">Our Team</h1>
                    <p align="center">Something about our team</p>
                    <div class="teamGrid">
                        <div class="colmun">
                            <div class="teamcol">
                                <div class="teamcolinner">

                                    <div class="member-name"> <h2 align="center">Love Babber sheet</h2> </div>
                                    <div class="member-info"><p align="center">Lorem Ipsum is a simply dummy text of the printing and typesetting industry.</p></div>
                                    <div class="member-mail"> <p align="center"> <a href="mailto:kettyleroux@gmail.com">kettyleroux@gmail.com</a> </p> </div>
                                    <div class="member-social">
                                        <ul class="social-listing">
                                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="colmun">
                            <div class="teamcol">
                                <div class="teamcolinner">

                                    <div class="member-name"> <h2 align="center">Striver Sheet</h2> </div>
                                    <div class="member-info"><p align="center">Lorem Ipsum is a simply dummy text of the printing and typesetting industry.</p></div>
                                    <div class="member-mail"> <p align="center"> <a href="mailto:kettyleroux@gmail.com">kettyleroux@gmail.com</a> </p> </div>
                                    <div class="member-social">
                                        <ul class="social-listing">
                                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="colmun">
                            <div class="teamcol">
                                <div class="teamcolinner">

                                    <div class="member-name"> <h2 align="center">Faraz Sheet</h2> </div>
                                    <div class="member-info"><p align="center">Lorem Ipsum is a simply dummy text of the printing and typesetting industry.</p></div>
                                    <div class="member-mail"> <p align="center"> <a href="mailto:kettyleroux@gmail.com">kettyleroux@gmail.com</a> </p> </div>
                                    <div class="member-social">
                                        <ul class="social-listing">
                                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ..................footer................................ */}

            <div className="event"></div>

            <div class="footer-basic">
                <footer>

                    <div class="social"><a href="#"><i class="icon "><InstagramIcon /></i></a><a href="#"><i class="icon"></i></a><a href="#"><i class="icon"></i></a><a href="#"><i class="icon ion-social-facebook"></i></a></div>
                    <ul class="list-inline">
                        <li class="list-inline-item"><a href="#">Home</a></li>
                        <li class="list-inline-item"><a href="#">Services</a></li>
                        <li class="list-inline-item"><a href="#">About</a></li>
                        <li class="list-inline-item"><a href="#">Terms</a></li>
                        <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
                    </ul>
                    <p class="copyright">CodeNet © 2021</p>
                </footer>
            </div>
        </>
    )
}
