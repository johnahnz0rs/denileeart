import React from 'react';

// 4,8,10,11,12,14,14a,15,16,16a,17,18,19,20,25,31
// import Day4 from '../assets/4.png';
// import Day8 from '../assets/8.png';
// import Day10 from '../assets/10.png';
// import Day11 from '../assets/11.png';
// import Day12 from '../assets/12.png';
// import Day14 from '../assets/14.png';
// import Day14a from '../assets/14a.png';
// import Day15 from '../assets/15.png';
// import Day16 from '../assets/16.png';
// import Day16a from '../assets/16a.png';
// import Day17 from '../assets/17.png';
// import Day18 from '../assets/18.png';
// import Day19 from '../assets/19.png';
// import Day20 from '../assets/20.png';
// import Day25 from '../assets/25.png';
// import Day31 from '../assets/31.png';
import Thumb4 from '../assets/t4.png';
import Thumb8 from '../assets/t8.png';
import Thumb10 from '../assets/t10.png';
import Thumb11 from '../assets/t11.png';
import Thumb12 from '../assets/t12.png';
import Thumb14 from '../assets/t14.png';
import Thumb14a from '../assets/t14a.png';
import Thumb15 from '../assets/t15.png';
import Thumb16 from '../assets/t16.png';
import Thumb16a from '../assets/t16a.png';
import Thumb17 from '../assets/t17.png';
import Thumb18 from '../assets/t18.png';
import Thumb19 from '../assets/t19.png';
import Thumb20 from '../assets/t20.png';
import Thumb25 from '../assets/t25.png';
import Thumb31 from '../assets/t31.png';




class Inktober extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
        // declare methods here
    }

    componentDidMount() { }

    render() {

        const thumbnail = {width: '95%', maxWidth: '100px'};


        return (<React.Fragment>
            <div className="" style={{}}>

                <div className="mb-3" style={{padding: '30px'}}>
                    <h3 className="mb-1">Inktober 2018</h3>
                    <p>(click thumbnail for full view)</p>
                </div>

                {/* THUMBNAILS */}
                {/*4*/}
                {/*<div className="col-4 d-inline-block text-center">*/}
                    <a className="col-4 d-inline-block text-center" href="#" data-toggle="modal" data-target="#Day4Modal" style={{cursor: 'pointer'}}>
                        <figure className="figure text-center mb-5">
                            <img className="figure-img" src={Thumb4} alt="Day 4" style={thumbnail} />
                            <figcaption className="figure-caption">Day 4</figcaption>
                        </figure>
                    </a>
                {/*</div>*/}

                {/*8*/}
                <div className="col-4 d-inline-block text-center">
                    <a href="#" data-toggle="modal" data-target="#Day8Modal" style={{cursor: 'pointer'}}>
                        <figure className="figure text-center mb-5">
                            <img className="figure-img" src={Thumb8} alt="Day 8" style={thumbnail} />
                            <figcaption className="figure-caption">Day 8</figcaption>
                        </figure>
                    </a>
                </div>

                {/*10*/}
                <div className="col-4 d-inline-block text-center">
                    <a href="#" data-toggle="modal" data-target="#Day10Modal" style={{cursor: 'pointer'}}>
                        <figure className="figure text-center mb-5">
                            <img className="figure-img" src={Thumb10} alt="Day 10" style={thumbnail} />
                            <figcaption className="figure-caption">Day 10</figcaption>
                        </figure>
                    </a>
                </div>

                {/*11*/}
                <div className="col-4 d-inline-block text-center">
                    <a href="#" data-toggle="modal" data-target="#Day11Modal" style={{cursor: 'pointer'}}>
                        <figure className="figure text-center mb-5">
                            <img className="figure-img" src={Thumb11} alt="Day 11" style={thumbnail} />
                            <figcaption className="figure-caption">Day 11</figcaption>
                        </figure>
                    </a>
                </div>

                {/*12*/}
                <div className="col-4 d-inline-block text-center">
                    <a href="#" data-toggle="modal" data-target="#Day12Modal" style={{cursor: 'pointer'}}>
                        <figure className="figure text-center mb-5">
                            <img className="figure-img" src={Thumb12} alt="Day 12" style={thumbnail} />
                            <figcaption className="figure-caption">Day 12</figcaption>
                        </figure>
                    </a>
                </div>

                {/*14*/}
                <div className="col-4 d-inline-block text-center">
                    <a href="#" data-toggle="modal" data-target="#Day14Modal" style={{cursor: 'pointer'}}>
                        <figure className="figure text-center mb-5">
                            <img className="figure-img" src={Thumb14} alt="Day 14" style={thumbnail} />
                            <figcaption className="figure-caption">Day 14</figcaption>
                        </figure>
                    </a>
                </div>

                {/*14a*/}
                <div className="col-4 d-inline-block text-center">
                    <a href="#" data-toggle="modal" data-target="#Day14aModal" style={{cursor: 'pointer'}}>
                        <figure className="figure text-center mb-5">
                            <img className="figure-img" src={Thumb14a} alt="Day 14A" style={thumbnail} />
                            <figcaption className="figure-caption">Day 14A</figcaption>
                        </figure>
                    </a>
                </div>

                {/*15*/}
                <div className="col-4 d-inline-block text-center">
                    <a href="#" data-toggle="modal" data-target="#Day15Modal" style={{cursor: 'pointer'}}>
                        <figure className="figure text-center mb-5">
                            <img className="figure-img" src={Thumb15} alt="Day 15" style={thumbnail} />
                            <figcaption className="figure-caption">Day 15</figcaption>
                        </figure>
                    </a>
                </div>

                {/*16*/}
                <div className="col-4 d-inline-block text-center">
                    <a href="#" data-toggle="modal" data-target="#Day16Modal" style={{cursor: 'pointer'}}>
                        <figure className="figure text-center mb-5">
                            <img className="figure-img" src={Thumb16} alt="Day 16" style={thumbnail} />
                            <figcaption className="figure-caption">Day 16</figcaption>
                        </figure>
                    </a>
                </div>

                {/*16a*/}
                <div className="col-4 d-inline-block text-center">
                    <a href="#" data-toggle="modal" data-target="#Day16aModal" style={{cursor: 'pointer'}}>
                        <figure className="figure text-center mb-5">
                            <img className="figure-img" src={Thumb16a} alt="Day 16a" style={thumbnail} />
                            <figcaption className="figure-caption">Day 16A</figcaption>
                        </figure>
                    </a>
                </div>

                {/*17*/}
                <div className="col-4 d-inline-block text-center">
                    <a href="#" data-toggle="modal" data-target="#Day17Modal" style={{cursor: 'pointer'}}>
                        <figure className="figure text-center mb-5">
                            <img className="figure-img" src={Thumb17} alt="Day 17" style={thumbnail} />
                            <figcaption className="figure-caption">Day 17</figcaption>
                        </figure>
                    </a>
                </div>

                {/*18*/}
                <div className="col-4 d-inline-block text-center">
                    <a href="#" data-toggle="modal" data-target="#Day18Modal" style={{cursor: 'pointer'}}>
                        <figure className="figure text-center mb-5">
                            <img className="figure-img" src={Thumb18} alt="Day 18" style={thumbnail} />
                            <figcaption className="figure-caption">Day 18</figcaption>
                        </figure>
                    </a>
                </div>

                {/*19*/}
                <div className="col-4 d-inline-block text-center">
                    <a href="#" data-toggle="modal" data-target="#Day19Modal" style={{cursor: 'pointer'}}>
                        <figure className="figure text-center mb-5">
                            <img className="figure-img" src={Thumb19} alt="Day 19" style={thumbnail} />
                            <figcaption className="figure-caption">Day 19</figcaption>
                        </figure>
                    </a>
                </div>

                {/*20*/}
                <div className="col-4 d-inline-block text-center">
                    <a href="#" data-toggle="modal" data-target="#Day20Modal" style={{cursor: 'pointer'}}>
                        <figure className="figure text-center mb-5">
                            <img className="figure-img" src={Thumb20} alt="Day 20" style={thumbnail} />
                            <figcaption className="figure-caption">Day 20</figcaption>
                        </figure>
                    </a>
                </div>

                {/*25*/}
                <div className="col-4 d-inline-block text-center">
                    <a href="#" data-toggle="modal" data-target="#Day25Modal" style={{cursor: 'pointer'}}>
                        <figure className="figure text-center mb-5">
                            <img className="figure-img" src={Thumb25} alt="Day 25" style={thumbnail} />
                            <figcaption className="figure-caption">Day 25 </figcaption>
                        </figure>
                    </a>
                </div>

                {/*31*/}
                <div className="col-4 d-inline-block text-center">
                    <a href="#" data-toggle="modal" data-target="#Day31Modal" style={{cursor: 'pointer'}}>
                        <figure className="figure text-center mb-5">
                            <img className="figure-img" src={Thumb31} alt="Day 31" style={thumbnail} />
                            <figcaption className="figure-caption">Day 31</figcaption>
                        </figure>
                    </a>
                </div>



            </div>
        </React.Fragment>);
    }

}

export default Inktober;