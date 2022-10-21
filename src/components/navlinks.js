import React from "react";
import pvars from '../personalvars.json';


class NavLinks extends React.Component {
    
    render() {
        return (
            <div className="AppSection" >
                <div>
                <h4 className="SectionTitle">Links</h4>
                <div className="SectionBody">
                <li><a href="https://github.com/DirePeacock">github</a></li>
                <li><a href="https://twitter.com/DirePeacock">twitter</a></li>
                </div>
                </div>
            </div>);
    }
}
export default Links