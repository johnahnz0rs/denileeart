import React from 'react';

class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
        // declare methods here
    }

    componentDidMount() { }

    render() {



        return (<React.Fragment>
            <div className="" style={{padding: '30px'}}>
                <h3 className="mb-5">About <span className="d-md-none">Deni Rene Lee</span></h3>
                <p className="mb-5">Nature-y 🌿, foodie 🍜, and kind of sketchy ✏️</p>
                <p className="mb-5">"You're only given a little spark of madness. You mustn't lose it."</p>
            </div>
        </React.Fragment>);
    }

}

export default About;