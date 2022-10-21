import React from "react";
import pvars from '../personalvars.json';

class FileSymbol extends React.Component {
    render()
    {
        var fs_color_map = {
            "<>":"orange",
            "$":"seagreen",
            "i":"blue",
            "{}":"yellow",
            "JS":"yellow",
            "Py":"magenta"
        }
        var sym_color=this.props.sym_color ? this.props.sym_color : fs_color_map[this.props.file_symbol] ;
        var style = {color:'var(--'+sym_color+')'};
        return (<div className="FileSymbol" style={style}>{this.props.file_symbol}</div>)
    }
}
class SectionHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true
        }
    ;}
    render() {
        var abbrev = this.props.data.firstname[0].toLowerCase() + this.props.data.lastname[0].toLowerCase() + '  '
        var file_symbol = this.props.file_symbol ? this.props.file_symbol : "<>" 
        var name_color = this.props.name_color ? this.props.name_color : "foreground" 
        var name_style = {color:'var(--'+name_color+')'};
        var parent_function = this.props.parent_method ? this.props.parent_method : () => {}
        var click_function = () => { 
            parent_function() 
            this.setState({visible: !this.state.visible})
        }

        return (
            <div className="SectionHeader">
                <div className="TabTopRow">
                    <FileSymbol file_symbol={file_symbol} />
                    
                    <div className="TabTitle" style={name_style}>{this.props.title}</div> 
                    <button className="Minimize" onClick={click_function}>{this.state.visible ? '-' : '+'}</button>
                </div>
                <div className="TabSubtitle">
                    <div className="filepath"> {abbrev} &#62; <FileSymbol file_symbol={file_symbol} />{this.props.subtitle}</div>
                </div>
            </div>);
    }
}
export default SectionHeader