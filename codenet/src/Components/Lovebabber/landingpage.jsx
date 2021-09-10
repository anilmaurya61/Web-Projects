import React from 'react'
import './landingpage.css';

export default function landingpage() {
    return (
        <>
            <header>
                <div className="logo-container">
                    <img src="./img/logo.svg" alt="logo" />
                    <h4 className="logo">CodeNet</h4>
                </div>
                <nav>
                    <ul className="nav-links">
                        <li><a className="nav-link" href="#">Love Babber Sheet</a></li>
                        <li><a className="nav-link" href="#">Striver Sheet</a></li>
                        <li><a className="nav-link" href="#">Faraz Sheet</a></li>
                    </ul>
                </nav>
                <div className="cart">
                    <img src="./img/cart.svg" alt="cart" />
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

                <img className="big-circle" src="./img/big-eclipse.svg" alt="" />
                <img className="mid-circle" src="./img/mid-eclipse.svg" alt="" />
                <img className="small-circle" src="./img/small-eclipse.svg" alt="" />
            </main>

            {/* ............................................................. */}

            <div class="teamWrapper">
                <div class="container">
                    <h1 align="center">Our Team</h1>
                    <p align="center">Something about our team</p>
                    <div class="teamGrid">
                        <div class="colmun">
                            <div class="teamcol">
                                <div class="teamcolinner">
                                    <div class="avatar"><img src="https://i.ibb.co/6nQP7Wm/pexels-vinicius-wiesehofer-1130626-1.jpgjpg" alt="Member" /></div>
                                    <div class="member-name"> <h2 align="center">Ketty Leroux</h2> </div>
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
                                    <div class="avatar"><img src="https://i.ibb.co/6nQP7Wm/pexels-vinicius-wiesehofer-1130626-1.jpg" alt="Member" /></div>
                                    <div class="member-name"> <h2 align="center">Ketty Leroux</h2> </div>
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
                                    <div class="avatar"><img src="https://i.ibb.co/6nQP7Wm/pexels-vinicius-wiesehofer-1130626-1.jpg" alt="Member" /></div>
                                    <div class="member-name"> <h2 align="center">Ketty Leroux</h2> </div>
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

            <div class="footer-basic">
                <footer>
                    <div class="social"><a href="#"><i class="icon ion-social-instagram"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-facebook"></i></a></div>
                    <ul class="list-inline">
                        <li class="list-inline-item"><a href="#">Home</a></li>
                        <li class="list-inline-item"><a href="#">Services</a></li>
                        <li class="list-inline-item"><a href="#">About</a></li>
                        <li class="list-inline-item"><a href="#">Terms</a></li>
                        <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
                    </ul>
                    <p class="copyright">Company Name © 2018</p>
                </footer>
            </div>
        </>
    )
}
