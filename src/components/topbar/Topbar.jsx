//barre supérieure 
import './topbar.scss'
export default function Topbar({menuOpen,setMenuOpen}) {
    return (

        <div className={"topbar " + (menuOpen && "active")}>
           <div className="wrapper">
                <div className='left'>
                    <a href="#intro" className='logo'>Mhm_Rs</a>
                    <div className='itemContainer'>
                        <i className="fa-solid fa-user icon"></i>
                        <a href='tel:+237690354942'><span>+33 07 58 94 97 07</span></a>
                    </div>
                    <div className='itemContainer'>
                       <i className="fa-solid fa-envelope icon"></i>
                        <a href='mailto:mohamanrais@gmail.com'><span>mohamanrais@gmail.com</span></a>
                    </div>
                    <div className='itemContainer'>
                       <i className="fa-brands fa-linkedin-in icon"></i>
                        <a href='https://www.linkedin.com/in/ra%C3%AFs-mohaman-0240a9205/'> <span>Mohaman Rais</span></a>
                    </div>
                    <div className='itemContainer'>
                      <i className="fa-brands fa-github icon"></i>
                        <a href='https://github.com/Mhm-Rs'> <span>Mhm_Rs</span></a>
                    </div>
                </div>
                <div className='right'>
                    <div className="hamburger" onClick={()=>setMenuOpen(menu=>!menu)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}