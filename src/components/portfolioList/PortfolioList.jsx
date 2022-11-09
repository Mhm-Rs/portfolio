//afficher un onglet du portfolio (featured, design ou web)

import "./portfolioList.scss"

export default function PortfolioList({id,title,active,setSelected}) {
    return (
        <li className={active ? "portfolioList active" : 'portfolioList'}
            //style différent si un onglet est cliqué
            onClick={() => setSelected(id)
            
            }
        >
            {title}
        </li>
        )

}