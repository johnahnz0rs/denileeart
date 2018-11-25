import React from 'react';
import Home from './Home';
import Day4 from "../assets/4.png";
import Day8 from "../assets/8.png";
import Day10 from "../assets/10.png";
import Day11 from "../assets/11.png";
import Day12 from "../assets/12.png";
import Day14 from "../assets/14.png";
import Day14a from "../assets/14a.png";
import Day15 from "../assets/15.png";
import Day16 from "../assets/16.png";
import Day16a from "../assets/16a.png";
import Day17 from "../assets/17.png";
import Day18 from "../assets/18.png";
import Day19 from "../assets/19.png";
import Day20 from "../assets/20.png";
import Day25 from "../assets/25.png";
import Day31 from "../assets/31.png";

class ContentArea extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
        //declare methods here

    }

    componentDidMount() {
        // onInit
    }

    render() {

        return(
            <React.Fragment>
                <div className="root-div">

                    <Home/>



                </div>
            </React.Fragment>
        );
    }



}


export default ContentArea;