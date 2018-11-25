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
            <div className="" style={{padding: '40px'}}>
                <h3 className="mb-5">About</h3>
                <p className="mb-3">Nature-y 🌿, foodie 🍜, and kind of sketchy ✏️</p>
                <p className="mb-3">You're only given a little spark of madness. You mustn't lose it.</p>



            </div>
        </React.Fragment>);
    }

}

export default About;