
import React from "react";
import "./TweetBox.css";
import { Avatar,Button } from "@material-ui/core"

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <input placeholder="Whats Happening?"></input>
                </div>
                <input  className="tweetBox__imageInput" placeholder="Enter Image URL" type="text" />
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
            
        </div>
    )
}

export default TweetBox
