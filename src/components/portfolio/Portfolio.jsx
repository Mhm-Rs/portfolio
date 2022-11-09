//tous les éléments du portfolio (2ème page)

import "./portfolio.scss"
import "../portfolioList/PortfolioList.jsx"
import PortfolioList from "../portfolioList/PortfolioList.jsx"
import { useState } from "react"
import {
    featuredPortfolio,
    webPortfolio,
    designPortfolio,
    otherappsPortfolio,
} from '../../data'
import { useEffect } from "react"

export default function Portfolio() {

    const [selected, setSelected] = useState("featured")

    const [data, setData] = useState([])
    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: 'web',
            title: "Web App"
        },
        {
            id: 'design',
            title: "Design"
        },
        {
            id:"other apps",
            title:"Other Apps"
        }
    ]

    useEffect(() => {
        //choisir le tableau à parcourir en fonction de l'onglet du portfolio
        switch (selected) {
            case "featured":
                setData(featuredPortfolio)
                break;
            case "web":
                setData(webPortfolio)
                break;
            case "design":
                setData(designPortfolio)
                break;
            case "other apps":
                setData(otherappsPortfolio)
                break;
            default:
                setData(featuredPortfolio);
        }
    }, [selected])
    return (

        <div className="portfolio" id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                {list.map(item => (
                    <PortfolioList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className='container'>
                {data.map(element => (
                    <div className='item'>
                        <img
                            src={element.img}
                            alt='bank'
                        />
                        <h3>
                            <a 
                            href={element.url}
                            target="_blank"
                            rel="noreferrer">
                                {element.title}
                            </a>
                        </h3>

                    </div>
                ))}

            </div>
        </div>

    )
}