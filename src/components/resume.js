import React from "react";
import resumepdf from '../2022Resume.pdf';

class Resume extends React.Component {
    render() {
        var pdflink = '' + {resumepdf} + '#view=FitH'
        return (
            <div className="AppSection" >
                <div className="SectionBody">
                    <div id="ResumeDiv">
                        <object id="ResumePDF" data={resumepdf} type="application/pdf" /></div>
                    <br/>
                    <a href={resumepdf}>link to pdf</a>
                </div>
            </div>);
    }
}
export default Resume