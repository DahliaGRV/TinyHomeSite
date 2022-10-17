import React from 'react';
import '../../styles/home.css';

const communities = [
    {
        title: "Facebook",
        imgLink: "/Facebook.png",
        imgAlt: "Facebook",
        siteLink: "https://www.facebook.com/",
        cardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ex enim, accumsan quis tellus at, faucibus vulputate lectus. Sed gravida fringilla lorem, vitae sollicitudin est interdum ac. Cras eget velit aliquet, malesuada urna vel, feugiat nulla."
    },{
        title: "Reddit",
        imgLink: "/Reddit.png",
        imgAlt: "Reddit",
        siteLink: "https://www.reddit.com/",
        cardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ex enim, accumsan quis tellus at, faucibus vulputate lectus. Sed gravida fringilla lorem, vitae sollicitudin est interdum ac. Cras eget velit aliquet, malesuada urna vel, feugiat nulla."
    },{
        title: "Blogs",
        imgLink: "/Blog.png",
        imgAlt: "Blog",
        siteLink: "https://tinyhouseblog.com/",
        cardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ex enim, accumsan quis tellus at, faucibus vulputate lectus. Sed gravida fringilla lorem, vitae sollicitudin est interdum ac. Cras eget velit aliquet, malesuada urna vel, feugiat nulla."
    },{
        title: "Podcasts",
        imgLink: "/Podcast.png",
        imgAlt: "Podcast",
        siteLink: "https://www.thetinyhouse.net/thlp/",
        cardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ex enim, accumsan quis tellus at, faucibus vulputate lectus. Sed gravida fringilla lorem, vitae sollicitudin est interdum ac. Cras eget velit aliquet, malesuada urna vel, feugiat nulla."
    },
]

export default function Community() {
    return (
        <div>
            <h1 style={{ color: "white", marginLeft: "40%", marginTop: "2%" }}>Let's get connected!</h1>
            <div className="parentDiv">
                {communities.map(({title, imgLink, imgAlt, siteLink, cardText}) => {
            return (
            <div class="card" style={{ width: "20rem", height: "40rem", backgroundColor: "transparent" }} key={title}>
                <img src={imgLink} class="card-img-top" alt={imgAlt}/>
                <div class="card-body">
                    <h5 class="card-title" style={{color: "white"}}>{title}</h5>
                    <p class="card-text" style={{color: "white"}}>{cardText}</p>
                </div>
                <div class="card-body">
                    <a href={siteLink}className="card-link" style={{color:"white"}}>{title}</a>
                </div>
            </div>
            )
                })}
            </div>
        </div>
    )
    
}