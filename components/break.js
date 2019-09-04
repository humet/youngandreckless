import React, { Component } from "react"
import NProgress from "nprogress"

import loadImage from '../lib/image-promise.common-js';
import BreakMe from "../components/breakme"
import Head from 'next/head'
import Header from "../components/header"

import "./thanks.scss"
import "./break.scss"
import "../node_modules/nprogress/nprogress.css"

const startDate = new Date('2019-08-30')
const endDate = new Date('2019-09-10T07:00:00Z')
const currentTime = new Date();
const mask = "/static/images/breaks/breakMask.png"

class Break extends Component {
    constructor(props){
        super(props)

        this.canvasWrapperRef = React.createRef();

        this.state = {
            backgroundurl: "",
            backgroundnumber: this.getBackgroundNumber(),
            clicked: false,
            offer: false,
            clickPos: {
                x: 0,
                y: 0
            },
        }
    }

    componentDidMount(){ 
        const ReactPixel = require('react-facebook-pixel').default;
        ReactPixel.init('2441383812609484');
        ReactPixel.pageView(); 
        this.setupImages()
    }

    setupImages(clickPos) {

        NProgress.start();
        var originalImage = "/static/images/Y&R-" + this.checkDevice() + ".jpg"
        var breakImage = "/static/images/breaks/" +  this.checkDevice() + "-" + this.getBackgroundNumber() + ".jpg"
        
        loadImage([originalImage, breakImage, mask])
        .then((allImgs) => {
            //console.log(allImgs.length, 'images loaded!', allImgs);
            //console.log(allImgs[0].naturalHeight)
            this.createBreak(allImgs[0], allImgs[1], allImgs[2], this.state.clickPos)
        })
        .catch(function (err) {
            console.error('One or more images have failed to load :(');
            console.error(err.errored);
            console.info('But these loaded fine:');
            console.info(err.loaded);
        });
    }

    createBreak(bgImage, overlayImage, breakMask, clickPos) {
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")

        ctx.canvas.width = this.canvasWrapperRef.current.clientWidth
        ctx.canvas.height = this.canvasWrapperRef.current.clientHeight

        const canvas2 = this.refs.canvas2
        const ctx2 = canvas2.getContext("2d")

        ctx2.canvas.width = this.canvasWrapperRef.current.clientWidth
        ctx2.canvas.height = this.canvasWrapperRef.current.clientHeight
        ctx2.globalCompositeOperation = 'xor';

        let width = 414
        let height = 736

        if(this.checkDevice() == "desktop") {
            width = 1440
            height = 900
        }

        let xPos = ctx2.canvas.width / 2 - overlayImage.width / 2
        ctx.drawImage(bgImage, xPos, 0, width, height);
    
        xPos = ctx2.canvas.width / 2 - overlayImage.width / 2
        ctx2.drawImage(overlayImage, xPos, 0, width, height)
        //alert('X: ' + clickPos.x + ' Y: ' + clickPos.y)
        if(clickPos.x != 0) {
            ctx2.drawImage(breakMask, clickPos.x - 200, clickPos.y - 200, 400, 400)
        }

        NProgress.done();
    }

    checkDevice() {
        if(window.innerWidth > 767) {
            return "desktop"
        } else {
            return "mobile"
        }
    }

    getBackgroundNumber() {
        let totalTime = endDate - startDate;
        let timePassed = currentTime - startDate;
        let percentPassed = timePassed / totalTime;

        if(percentPassed < 0.1) {
            return 1;
        } else
        if(percentPassed < 0.2) {
            return 2;
        } else
        if(percentPassed < 0.3) {
            return 3;
        } else
        if(percentPassed < 0.4) {
            return 4;
        } else
        if(percentPassed < 0.5) {
            return 5;
        } else
        if(percentPassed < 0.6) {
            return 6;
        } else
        if(percentPassed < 0.7) {
            return 7;
        } else
        if(percentPassed < 0.8) {
            return 8;
        } else
        if(percentPassed < 0.9) {
            return 9;
        } else
        if(percentPassed < 1) {
            return 10;
        } else {
            return 1;
        }
    }

    setBackground(bgnumber) {
        if(this.props.clicked) {
            bgnumber++
        }

        this.setState({
            backgroundurl: "/static/images/breaks/" + device + "-" + bgnumber + ".jpg" 
        })
    }

    handleBreakClick (e) {
        if(this.props.clickable && !this.state.clicked) {

            var rect = this.canvasWrapperRef.current.getBoundingClientRect();
            var offset = 
            {
                top: rect.top,
                left: rect.left + document.body.scrollLeft
            }

            let newbgnumber = this.state.backgroundnumber + 1;

            let clickPos = {
                x: e.clientX - offset.left,
                y: e.clientY - offset.top
            }
            //this.setBackground(newbgnumber)
            this.setState({
                backgroundnumber: newbgnumber,
                clicked: true,
                clickPos: {
                    x: e.clientX - offset.left,
                    y: e.clientY - offset.top
                }
            })

            this.setupImages(clickPos);

            let delayInMilliseconds = 3000;

            setTimeout(() =>
                this.setState({
                    offer: true
                })
            , delayInMilliseconds);
            

        }
    }

    render(){
        return (
            <div ref={this.canvasWrapperRef} onClick={(event) => this.handleBreakClick(event)} className={this.state.clicked ? "breakContainer shake" : "breakContainer"} style={{ position: `absolute`, display: `flex`, top: 0, left: 0, boxShadow: `0 0 10px 10px rgba(0,0,0,0.4)`, cursor: this.props.clickable && !this.state.clicked ? `url('/static/images/hammer.svg'), url('/static/images/hammer.png'), url('/static/images/hammer.cur'), crosshair` : `cursor`, background: '#fff' }}>
            <canvas ref="canvas" style={{ position: `absolute`, top: 0, left: 0, width: `100%`, height: `100%`}} />
            <canvas ref="canvas2" style={{ position: `absolute`, top: 0, left: 0, width: `100%`, height: `100%`}} />
            <div style={{ display: this.props.clickable && !this.state.clicked ? `block` : `none`, width: 450 }}><BreakMe /></div>
            <div className="content" style={{position: `relative`, margin: `0 10px`, background: `#fff`, border: `3px solid #000`, padding: 20, display: this.state.offer ? `block` : `none`}}>
      <Head>
        <title>Young & Reckless - Game</title>
      </Head>
      <Header />
      <h1>STAY RECKLESS!</h1>
      <p>Für mehr Style Inspiration folge uns auf:</p>
      <p>
          <a href="https://www.facebook.com/recklessla/" target="_blank"><img width="50px" src="/static/images/icons/facebook.svg" alt="Facebook" style={{marginRight: 10}} /></a>
          <a href="https://www.instagram.com/recklessLA/" target="_blank"><img width="50px" src="/static/images/icons/instagram.svg" alt="Instagram" /></a></p>  
      </div>
            </div>
        )
    }
}

export default Break;