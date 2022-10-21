import React from 'react';

class Vandal5 extends React.Component {
    render() {
        return (
            <div class="AppSection" >
                <div class="SectionBody">
                <div class="SectionText">
                    <br />   I've am working on a solo-project game. It's made in python using a custom game engine and 
                    the python <a href="https://kivy.org/">kivy</a> library to build something that can be run on multiple platforms 
                    when completed
                </div>
                
                <iframe id="YoutubeDemo" title="vandal5"
                    src="https://youtube.com/embed/r61550RFcEY">
                </iframe>
                <div class="SectionText">
                    <br />   There's more information in the video. Most of the non-public vandal 5 code is the application UI, 
                    plugging a kivy app into the game engine, and the game design aspects I myself made.
                </div>
                </div>
            </div >
        );
    }

}
export default Vandal5