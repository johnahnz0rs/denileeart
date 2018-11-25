import React from 'react';

import About from './About';
import Contact from './Contact';
import Inktober from './Inktober';


// import pics
import DeniBrand from '../assets/deni-brand.png';
import Facebook from '../assets/logo-fb.png';
import Instagram from '../assets/logo-ig.png';
import LinkedIn from '../assets/logo-linkedin.png';
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



class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            showThisPage: 'inktober',
        };
        // declare methods here
        this.pageHandler = this.pageHandler.bind(this);
    }

    componentDidMount() { }

    pageHandler = (e) => {
        const page = e.target.name;
        this.setState({showThisPage: page});
    };

    render() {

        const socialLogo = {width: '30px', height: 'auto', display: 'inline-block'};
        const fabooLogo = {width: '30px', height: 'auto', display: 'inline-block', backgroundColor: 'white'};

        const lol = {backgroundColor: 'black', color: 'white', height: '100vh', width: '100%', paddingTop: '30px'};


        return(<React.Fragment>

            <div className="" style={{}}>


                {/* desktop view */}
                <div className="d-none d-md-block container-fluid">

                    {/* nav */}
                    <div className="col-2 d-inline-block" style={{verticalAlign: 'top', paddingTop: '30px'}}>
                        <div className="">
                            <img className="d-block mb-3" style={{width: '150px'}} src={DeniBrand} alt="Denique Rene Lee" />
                            <h4 className="font-weight-bold mb-5">Deni Rene Lee</h4>
                        </div>

                        <button name="about" className="btn btn-outline-light d-block mb-1 font-weight-bold" style={{border: 'none'}} onClick={this.pageHandler}>About</button>
                        <button name="contact" className="btn btn-outline-light d-block mb-5 font-weight-bold" style={{border: 'none'}} onClick={this.pageHandler}>Contact</button>
                        <button name="inktober" className="btn btn-outline-light d-block mb-5 font-weight-bold" style={{border: 'none'}} onClick={this.pageHandler}>Inktober</button>

                        <a href="https://www.facebook.com/denequel" target="_blank" rel="noopener noreferrer"><img src={Facebook} alt="contact me" style={fabooLogo} /></a>
                        <a href="https://www.instagram.com/denirenelee" target="_blank" rel="noopener noreferrer"><img src={Instagram} alt="contact me" style={socialLogo} /></a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><img src={LinkedIn} alt="contact me" style={socialLogo} /></a>
                    </div>

                    {/* body */}
                    <div className="col-8 d-inline-block" style={{verticalAlign: 'top'}}>
                        {this.state.showThisPage === 'about' && <About /> }
                        {this.state.showThisPage === 'contact' && <Contact /> }
                        {this.state.showThisPage === 'inktober' && <Inktober /> }

                    </div>

                    {/* empty */}
                    <div className="col-2 d-inline-block" style={{verticalAlign: 'top'}}></div>

                </div>
                {/* end desktop view */}













                {/* mobile view */}
                <div className="d-block d-md-none container-fluid">

                    {/* nav */}
                    <div className="col-12" style={{}}>
                        <div className="d-inline-block mr-5" style={{verticalAlign: 'middle'}}>
                            <img className="d-block mb-3" style={{width: '70px', paddingTop: '10px'}} src={DeniBrand} alt="Denique Rene Lee" />
                            {/*<p className="font-weight-bold mb-5">Deni Rene Lee</p>*/}
                        </div>

                        <div className="d-inline-block ml-auto" style={{verticalAlign: 'middle'}}>
                            <button name="about" className="btn btn-sm btn-outline-light d-inline-block mr-2 font-weight-bold" style={{border: 'none'}} onClick={this.pageHandler}>About</button>
                            <button name="contact" className="btn btn-sm btn-outline-light d-inline-block mr-2 font-weight-bold" style={{border: 'none'}} onClick={this.pageHandler}>Contact</button>
                            <button name="inktober" className="btn btn-sm btn-outline-light d-inline-block mr-2 font-weight-bold" style={{border: 'none'}} onClick={this.pageHandler}>Inktober</button>
                        </div>
                    </div>

                    {/* body */}
                    <div className="col-12">
                        {this.state.showThisPage === 'about' && <About /> }
                        {this.state.showThisPage === 'contact' && <Contact /> }
                        {this.state.showThisPage === 'inktober' && <Inktober /> }
                    </div>




                </div>
                {/* end mobile view */}




                {/* MODALS */}
                {/*4*/}
                <div className="modal fade" id="Day4Modal" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body text-center">

                                <img src={Day4} alt="Day 4" style={{width: "95%", maxWidth: '600px'}} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/*8*/}
                <div className="modal fade" id="Day8Modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="myModalLabel">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body text-center">

                                <img src={Day8} alt="Day 8" style={{width: "95%", maxWidth: '600px'}} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/*10*/}
                <div className="modal fade" id="Day10Modal" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body text-center">

                                <img src={Day10} alt="Day 10" style={{width: "95%", maxWidth: '600px'}} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/*11*/}
                <div className="modal fade" id="Day11Modal" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body text-center">

                                <img src={Day11} alt="Day 11" style={{width: "95%", maxWidth: '600px'}} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/*12*/}
                <div className="modal fade" id="Day12Modal" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body text-center">

                                <img src={Day12} alt="Day 12" style={{width: "95%", maxWidth: '600px'}} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/*14*/}
                <div className="modal fade" id="Day14Modal" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body text-center">

                                <img src={Day14} alt="Day 14" style={{width: "95%", maxWidth: '600px'}} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/*14a*/}
                <div className="modal fade" id="Day14aModal" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body text-center">

                                <img src={Day14a} alt="Day 14A" style={{width: "95%", maxWidth: '600px'}} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/*15*/}
                <div className="modal fade" id="Day15Modal" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body text-center">

                                <img src={Day15} alt="Day 15" style={{width: "95%", maxWidth: '600px'}} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/*16*/}
                <div className="modal fade" id="Day16Modal" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body text-center">

                                <img src={Day16} alt="Day 16" style={{width: "95%", maxWidth: '600px'}} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/*16a*/}
                <div className="modal fade" id="Day16aModal" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body text-center">

                                <img src={Day16a} alt="Day 16A" style={{width: "95%", maxWidth: '600px'}} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/*17*/}
                <div className="modal fade" id="Day17Modal" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body text-center">

                                <img src={Day17} alt="Day 17" style={{width: "95%", maxWidth: '600px'}} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/*18*/}
                <div className="modal fade" id="Day18Modal" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body text-center">

                                <img src={Day18} alt="Day 18" style={{width: "95%", maxWidth: '600px'}} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/*19*/}
                <div className="modal fade" id="Day19Modal" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body text-center">

                                <img src={Day19} alt="Day 19" style={{width: "95%", maxWidth: '600px'}} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/*20*/}
                <div className="modal fade" id="Day20Modal" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body text-center">

                                <img src={Day20} alt="Day 20" style={{width: "95%", maxWidth: '600px'}} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/*25*/}
                <div className="modal fade" id="Day25Modal" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body text-center">

                                <img src={Day25} alt="Day 25" style={{width: "95%", maxWidth: '600px'}} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/*31*/}
                <div className="modal fade" id="Day31Modal" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body text-center">

                                <img src={Day31} alt="Day 31" style={{width: "95%", maxWidth: '600px'}} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </React.Fragment>);
    }

}

export default Home;