//Components
import React from 'react';
import './CreatePost.css';

//Icons
import { AiOutlineClose } from "react-icons/ai";
import { BsLightning } from "react-icons/bs";

const CreatePost = () => {
    return (
        <div className='container'>
            <p1 className='subHeaders'>Tags</p1>
            <div className='tagsContainer'>
                <div className='tags'>
                    <p1 className='tagsText'>Baseball</p1>
                    <AiOutlineClose />
                </div>
                <div className='tags'>
                    <p1 className='tagsText'>New York Mets</p1>
                    <AiOutlineClose />
                </div>
                <div className='tags'>
                    <p1 className='tagsText'>Atlanta Braves</p1>
                    <AiOutlineClose
                        color='grey'
                    />
                </div>
            </div>
            <p1 className='subHeaders'>Text</p1>
            <div className='textContainer'>
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
            <p1 className='subHeaders'>Media</p1>
            <div className='mediaContainer'>
                <img
                    src='./hotdog.jpg'
                    style={{
                        height: 200,
                        borderRadius: 10
                    }}
                />
                <div className='mediaButtons'>
                    <p1 className='mediaButtonsText'>Edit Image</p1>
                </div>
                <div className='mediaButtons'>
                    <p1 className='mediaButtonsText'>Upload New</p1>
                </div>
                <div className='deleteButton'>
                    <p1 className='mediaButtonsText'>Delete</p1>
                </div>
            </div>
            <div className='boostPostButton'>
                <BsLightning />
                <p1>Boost Post</p1>
            </div>
        </div>
    )
}

export default CreatePost;