import React from "react";
import pvars from '../personalvars.json';


class Links extends React.Component {
    
    render() {
        var xtra_link = this.props.data['psuedonymurl'] ? (<div><a href="#xtra">SCREENNAME.html</a><br/></div>) : null
        return (
            <div className="LinksBar" >
            
                {/* <div className="LeftBar" ><p id='LinksLabel'>Links to stuff</p></div> */}
                
                <div className="AllLinks" >
                    <div className="SectionText">Explorer</div>
                    <div className="PageLinks" >
                        <a href="#AboutMe">aboutme.md</a><br/>
                        <a href="#Resume">HIRE_ME.pdf</a><br/>
                        {xtra_link}
                        <a href="#Vandal5">vandal5.py</a><br/>
                        <a href="#EngineVe">engineve.py</a><br/>
                    
                    </div>
                    <div className="WebLinks" >
                    <div className="SectionText">Web</div>
                        <a href="https://github.com/DirePeacock">Github</a><br/>
                        <a href="https://twitter.com/DirePeacock">Twitter</a>
                    </div>
                </div>
            </div>);
    }
}
export default Links