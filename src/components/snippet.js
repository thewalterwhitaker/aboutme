import React from "react";

class Snippet extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="Snippet" >
                <h4 className="SectionTitle">Snippet</h4>
                <code>one two three four five six six six</code>
            </div>);
    }
}
export default Snippet