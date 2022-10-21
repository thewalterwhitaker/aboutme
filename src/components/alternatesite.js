import React from "react";
import SectionHeader from './sectionheader.js';
class AlternateSite extends React.Component {
    render() {
        var comment = "/* TODO code Dire Peacock monster stats w/ firebreath */"
        return (
            <div className="AppSection" >
                <div className="SectionBody">
                    The Primary version of this website is under the screenname on my public github & socials.<br/>
                    <a href={this.props.data['psuedonymurl']}>{this.props.data['psuedonym']}</a>
                    
                    <p className="Comment"><br/>{comment}</p>
                </div>
            </div>);
    }

}
export default AlternateSite