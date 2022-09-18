import './testimonials.scss'

export default function Testimonials() {

    const data = [
        {
            id: 1,
            name: "Tom Durden",
            title: "Senior Developer",
            img:
                "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "assets/twitter.png",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
        },
        {
            id: 2,
            name: "Alex Kalinski",
            title: "Co-Founder of DELKA",
            img:
                "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "assets/youtube.png",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
            featured: true,
        },
        {
            id: 3,
            name: "Martin Harold",
            title: "CEO of ALBI",
            img:
                "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "assets/linkedin.png",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
    ];

    return (

        <div className="testimonials" id='testimonials'>
            <h1>Testimonials</h1>
            <div className="container">
                {data.map(element => (
                    <div className={element.featured ? "card featured" : "card"}>
                        <div className='top'>
                            <img
                                src='assets/right-arrow.png'
                                alt='wai'
                                className='left'
                            />
                            <img
                                src={element.img}
                                alt='wai2'
                                className='user'
                            />
                            <img
                                src={element.icon}
                                alt="wai3"
                                className='right'
                            />
                        </div>
                        <div className='center'>{element.desc}
                        </div>
                        <div className='bottom'>
                            <h3>{element.name}</h3>
                                <h4>{element.title}</h4>
                        </div>
                    </div>
                ))}
                
            </div>
        </div>
    )
}