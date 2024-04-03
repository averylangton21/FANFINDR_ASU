import React from "react";
import './PreviewPost.css'

const PreviewPost = () => {
    return (
        <div className="container">
            <p1 className="header">Preview Post</p1>
            <div className="postContainer">
                <div className="location">
                    <div className="name">
                        <img src='./sportsbarlogo.jpg' style={{ height: 60, borderRadius: 60 }} />
                        <p2 className="barName">Hole in the Wall Sports Bar</p2>
                    </div>
                    <p1 className="time">just now</p1>
                </div>
                <img src='./hotdog.jpg' style={{ height: 250 }} />
                <div className="textContainer">
                    <p className='text'>
                        We'll be showing the New York Mets vs. Atlanta Branves tonight!!⚾️⚾️
                    </p>
                    <p className='text'>
                        Enjoy our game features:
                    </p>
                    <p className='text'>
                        🌭Southwest Style Loaded Hot Dogs
                    </p>
                    <p className='text'>
                        🍺$6 Bud and Miller Light Draft
                    </p>
                </div>
            </div>
            <div className="buttonContainer">
                <div className="button1">
                    <p2>Schedule for Later</p2>
                </div>
                <div className="button2">
                    <p2>Post Now</p2>
                </div>
            </div>
        </div>
    )
}

export default PreviewPost;