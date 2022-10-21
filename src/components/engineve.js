import { textAlign } from "@mui/system";
import React from "react";

import SyntaxHighlighter from 'react-syntax-highlighter';
import yaml from 'react-syntax-highlighter/dist/esm/languages/hljs/yaml';
import { stackoverflowDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import solaire_yaml from "./solaire_yml";
import uml from '../artassets/basic_omd.png';
class EngineVe extends React.Component {

    render() {
        return (
            <div className="AppSection">
                <div class="SectionBody">                
                    <div class="SectionText">
                        <br/>What is it? 
                        <br/>    It is an object oriented representation of a DnD game in a python module. It uses the command pattern to represent atomic events that happen to the game state, 
                            and the invoker pattern to get reactions of actors and apply effects/bonuses.

                        <br/><br/>Why is it?
                        <br/>   Because I don't think there is any other lightweight DnD simulation like this for 5e.
                        
                        <br/><br/>When is it?
                        <br/>    I've been cursed for my hubris and my work is never finished.<br/>                    
                    </div>
                    <div class="SectionText"><br/><a href="https://github.com/DirePeacock/engineve">HERE'S THE CODE ON GITHUB</a></div>
                    <div class="SectionText">
                    <br/><br/>This is what a character sheet looks like in yaml for this engine. As seen nearly dying in the first encounter of the <a href="https://www.youtube.com/watch?v=r61550RFcEY">demo video.</a>
                    </div>

                    <SyntaxHighlighter className="CodePreview"
                    lineProps={{style: {whiteSpace: 'pre-wrap'}}}
                    language='yaml'
                    wrapLongLines='true' 
                    style={stackoverflowDark}>{solaire_yaml}</SyntaxHighlighter>
                    
                    <div class="SectionText">
                        <br/>
                        Lessons learned:
                        <br/>    Unit Tests are great, especially the ones that fail.
                        <br/>    yaml is more aesthetic than xml and cfg.
                        <br/>    keep things serializable.
                        <br/>    Spending time making a game engine takes time away from making the game itself.
                        

                    </div>
                    <div class="SectionText"><br/><br/>For all those who made it to the end, here's some uml for the high level things that won't change much.<br/></div>
                    <br/><img src={uml} alt="diagram" style={{width:"100%", maxWidth:1072, height:"auto"}} />
                    
                </div>
            </div>);
    }
}
export default EngineVe