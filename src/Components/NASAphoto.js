import React from 'react';

// const dummyData = {
//     date: "2023-01-21",
//     explanation: "Comet C/2022E3 (ZTF) is no longer too dim to require a telescope for viewing. By January 19, it could just be seen with the naked eye in this rural sky with little light pollution from a location about 20 kilometers from Salamanca, Spain. Still, telescopic images are needed to show any hint of the comet's pretty green coma, stubby whitish dust tail, and long ion tail. Its faint ion tail has been buffeted by recent solar activity. This visitor from the distant Oort cloud rounded the Sun on January 12. and is now sweeping through stars near the northern boundary of the constellation Bootes. Outward bound but still growing brighter, Comet ZTF makes its closest approach on February 2, coming to within about 2.4 light-minutes of our fair planet.",
//     hdurl: "https://apod.nasa.gov/apod/image/2301/ZTF_salamanca.jpg",
//     title: "Naked-eye Comet ZTF"    
// }

const NasaPhoto = (props) => {
    return (
        <div className="nasa-photo-wrapper">
            <h3>{props.photo.title}</h3>
            <p>{props.photo.date}</p>
            <img src={props.photo.hdurl} />
            <p className='explanation'>{props.photo.explanation}</p>
        </div>
    )
}

export default NasaPhoto;