import React from "react";
import ReactStars from "react-stars";
import ReviewText from "./review-text";
import './style.css';

export default class MovieList extends React.Component {
    render() {
        return <div>
            <h2>Rate And Write A Review</h2>

            <section className="scream-section">
            <img src="https://www.backtothemovies.com/wp-content/uploads/2017/10/Scream.jpg" className="images" />
            <p>"1966 American slasher film directed by Wes Craven. A group of friends are targeted by a mysterious killer wearing a Halloween costume known as Ghostface"</p>
            
            <ReviewText />
            </section>

            <section className="killbill-section">
            <img src="https://upload.wikimedia.org/wikipedia/en/2/2c/Kill_Bill_Volume_1.png" className="images" />
            <p>"Action film directed by Quentin Tarantino. A bride wakes up in a coma seeks revenge on team of assassins"</p>

            <ReviewText />
            </section>

            <section className="charliesangels-section">
            <img src="https://musicimage.xboxlive.com/catalog/video.movie.8D6KGWZL64XL/image?locale=en-us&mode=crop&purposes=BoxArt&q=90&h=300&w=200&format=jpg" className="images" />
            <p>"Action comedy film directed by McG. Three talented, beautiful, intelligent women working for a private detective"</p>

            <ReviewText />
            </section>

            <section className="whitechicks-section">
            <img src="https://m.media-amazon.com/images/I/516pTmL6guL._AC_SY580_.jpg" className="images" />
            <p>"Two FBI agents go undercover in effort to protect two heiresses named the Wilson sisters from a kidnapping plot. Directed by Keenen Ivory Wayans."</p>

            <ReviewText />
            </section>
        </div>
    }
}