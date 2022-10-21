import React from "react";

class AboutMe extends React.Component {
    render() {
        return (
            <div className="AppSection">
                <div class="SectionBody">
                    Hey, I'm {this.props.data['firstname']} {this.props.data['lastname']},
                    a software developer, artist, and general freelance nerd. I'm located in the wild west of north Texas
                    but I'd like to relocate further north and further west. I've' been a working software engineer since 2018
                    building UI's in C++ using OpenGL on embedded systems. I was a scrum master for a dev team for just about 2 years, gaining leadership
                    and agile experience. I had various opportunities to work in webapps, SQL and devops services while delivering a C++ product.
                    I also love automated tests, builds and deployments.
                </div>
            </div>);
    }
}
export default AboutMe