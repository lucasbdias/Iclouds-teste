import React, { useState, useEffect } from 'react';
import api from './services/api';

import './assets/styles/app.css';
import './assets/styles/globals.css';

import Header from './components/Header';
import SideBar from './components/SideBar';
import PostInfo from './components/PostInfo';
import Quote from './components/Quote';
import ImageSection from './components/ImageSection';
import PostSection from './components/PostSection';
import Footer from './components/Footer';

export default function App() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            console.log(response.data.items);
        })
    }, []);


    return (
        <div className="container">
            <Header title="Design Better. Faster. Together." description="The digital product design platform powering the world best user experiences" />
            <div className="wrapper">
                <SideBar />

                <div className="content">
                    <PostInfo category="Por onde começar" />
                    <div id="firstP" className="text-margin">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe id aperiam aut consequuntur excepturi error? Magni sapiente placeat libero numquam eaque voluptate, quam, illum aliquam, distinctio doloremque temporibus rem inventore.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sit impedit molestiae laborum, aperiam ducimus esse modi omnis quis eum quos dignissimos iusto odit quo porro alias commodi? Nostrum, eaque.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et animi atque maxime quasi alias iure possimus eius molestiae doloribus, ut eum aut exercitationem aliquam quisquam libero accusantium fugit quod at?
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, autem debitis quidem suscipit consequuntur reiciendis distinctio, sa
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe id aperiam aut consequuntur excepturi error? Magni sapiente placeat libero numquam eaque voluptate, quam, illum aliquam, distinctio doloremque temporibus rem inventore.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sit impedit molestiae laborum, aperiam ducimus esse modi omnis quis eum quos dignissimos iusto odit quo porro alias commodi? Nostrum, eaque.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et animi atque maxime quasi alias iure p
                        </p>
                    </div>
                    <Quote citation="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sit impedit molestiae laborum," />
                    <div id="secondP" className="text-margin flex-colum">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quas, dignissimos rerum sit, nostrum reiciendis illum commodi earum ipsa similique nobis adipisci quaerat eum, explicabo tempora autem consectetur distinctio quisquam?
                        </p>
                        <ol className="global-list">
                            <li>Primeiro item</li>
                            <li>Segundo item</li>
                            <li>Terceiro item</li>
                            <li>Quarto item</li>
                            <li>Quinto Item</li>
                            <li>Sexto item</li>
                        </ol>
                    </div>
                    <ImageSection />
                    <div id="thirdP" className="text-margin flex-colum">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quas, dignissimos rerum sit, nostrum reiciendis illum commodi earum ipsa similique nobis adipisci quaerat eum, explicabo tempora autem consectetur distinctio quisquam?
                        </p>
                        <ul className="global-list">
                            <li>Primeiro item</li>
                            <li>Segundo item</li>
                            <li>Terceiro item</li>
                            <li>Quarto item</li>
                            <li>Quinto Item</li>
                            <li>Sexto item</li>
                        </ul>
                    </div>
                    <ImageSection />
                    <div id="fourthP">
                        <h3>Aint output sain crays</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt iure vitae obcaecati numquam officiis blanditiis saepe similique minima illo id. Magnam aliquam, harum repudiandae suscipit voluptatum corrupti explicabo est eos!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, omnis enim? Maxime sapiente, error sed cumque odio aut temporibus fugit itaque dignissimos quidem illum repellat eos, qui delectus veniam eaque.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, voluptas sed reprehenderit fuga itaque i
                        </p>
                    </div>
                    <PostSection title="Design Better. Faster. Together" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quas, dignissimos rerum sit, nostrum reiciendis" />
                </div>
            
            </div>
            <Footer />
        </div>
    )
}