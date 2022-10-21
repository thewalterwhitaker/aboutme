import './App.css';
import icon from './artassets/icon_25.png';
import Resume from './components/resume.js'
import EngineVe from './components/engineve';
import Vandal5 from './components/vandal5';
import AboutMe from './components/aboutme';
import Links from './components/links';
import AlternateSite from './components/alternatesite';
import React from 'react';
import personalvars from './personalvars.json';
import SectionHeader from './components/sectionheader.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: personalvars,
      showaboutme: true,
      showresume: true,
      showxtra: true,
      showvandal5: true,
      showengineve: true,
      
    };
    this.toggleComponent = this.toggleComponent.bind(this);
  }
  toggleComponent(name) {
    console.log(name)
    switch(name) {
      case "showaboutme":
        this.setState({showaboutme: !this.state.showaboutme});
        break;
      case "showresume":
        this.setState({showresume: !this.state.showresume});
        break;
      case "showxtra":
        this.setState({showxtra: !this.state.showxtra});
        console.log(this.state.showxtra)
        break;
      case "showvandal5":
        this.setState({showvandal5: !this.state.showvandal5});
        break;
      case "showengineve":
        this.setState({showengineve: !this.state.showengineve});
        break;
      default:
        break;      
    }
  }

  render() {
    var alternate_site = null;
    var xtra_header=null;
    
    if ( this.state.data.psuedonymurl)
    {
      alternate_site = (
        this.state.showxtra ? <AlternateSite id='xtra' className='Section' data={this.state.data}></ AlternateSite> : null
      )
      xtra_header = (<SectionHeader data={this.state.data} title="SCREENNAME.html" subtitle="Primary site is under my 'Nom de Dev'." 
      parent_method={()=>{this.toggleComponent('showxtra')}} />)
    }
    
    var fullname = " " + this.state.data['firstname'] + this.state.data['namejoin'] + this.state.data['lastname']
    
    return (
      <div className="App">
        
        <div className="TopBar">
        <img id="icon" src={icon} alt="icon" />
          <div id="toptext"> {this.state.data.firstname}{this.state.data.namejoin}{this.state.data.lastname}
          </div>
        </div>
        
        <div className='AppMain'>
          <div className='SideBar'><Links data={this.state.data}/></div>
          <div className="AppBody">
            
            <SectionHeader title='aboutme.md' subtitle={fullname} file_symbol="i" data={this.state.data}
            parent_method={()=>{this.toggleComponent('showaboutme')}} /> 
            {this.state.showaboutme ? <AboutMe id="AboutMe" className='Section' data={this.state.data} /> : null}
            
            <SectionHeader title='HIRE_ME.pdf' subtitle="I > am > looking > for > work." file_symbol="$" data={this.state.data}
            parent_method={()=>{this.toggleComponent('showresume')}}/>
            {this.state.showresume ? <Resume id="Resume" className='Section' data={this.state.data} />  : null}

            {xtra_header}
            {alternate_site}
            
            <SectionHeader title='vandal5.py' subtitle="A game of DnD Auto-Chess" file_symbol="Py" data={this.state.data}  
            parent_method={()=>{this.toggleComponent('showvandal5')}}/>
            {this.state.showvandal5 ? <Vandal5 id="Vandal5" className='Section' data={this.state.data} /> : null}

            <SectionHeader title='engineve.py' subtitle="python > engine > for > DnD" file_symbol="Py"  data={this.state.data}
            parent_method={()=>{this.toggleComponent('showengineve')}}/>
            {this.state.showengineve ? <EngineVe id="EngineVe" className='Section' data={this.state.data} /> : null}
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
