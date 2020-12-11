import React from 'react';
import './Home.css?v=1.0';

const Home = ( { history } ) => 
{
   
    return (
        <>
            <div>
                <head>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"></link>
                </head>
                <div className='home_display'>
                <center id='home'>
                    <div className='animated fadeInDown'>findyourcolor</div>
                </center>
                    <div id="btn_group">
                    <button id="soo_btn2" onClick={ () => {history.push("/test")}}>test</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;