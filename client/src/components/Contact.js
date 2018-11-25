import React from 'react';


import Facebook from '../assets/logo-fb.png';
import Instagram from '../assets/logo-ig.png';
import LinkedIn from '../assets/logo-linkedin.png';

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
        // declare methods here
    }

    componentDidMount() { }

    render() {


        const socialLogo = {width: '30px', height: 'auto', display: 'inline-block'};
        const fabooLogo = {width: '30px', height: 'auto', display: 'inline-block', backgroundColor: 'white'};


        return (<React.Fragment>
            <div className="">

                {/*header*/}
                <h3 className="mb-3" style={{padding: '30px', paddingBottom: '0'}}>Contact <span className="d-md-none">Deni</span></h3>

                {/*social media*/}
                <div className="d-block mb-3" style={{padding: '0 40px'}}>
                    <a href="https://www.facebook.com/denequel" target="_blank" rel="noopener noreferrer"><img src={Facebook} alt="contact me" style={fabooLogo} /></a>
                    <a href="https://www.instagram.com/denirenelee" target="_blank" rel="noopener noreferrer"><img src={Instagram} alt="contact me" style={socialLogo} /></a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><img src={LinkedIn} alt="contact me" style={socialLogo} /></a>
                </div>

                {/*contact form*/}
                <div className="text-center">
                    <iframe className="mx-auto" src="https://docs.google.com/forms/d/e/1FAIpQLScrTDl3pkcuKCgxxmLqCuUtMlnIfY7gjilMZ1xAllpeQoTHRg/viewform?embedded=true" frameBorder="0" marginHeight="0" marginWidth="0" style={{width: '95%', height: '480px'}}>Loading...</iframe>
                </div>



            </div>



        </React.Fragment>);
    }

}

export default Contact;