import { FiHeart } from 'react-icons/fi';
import { BsCart3 } from 'react-icons/bs';
import { VscAccount } from 'react-icons/vsc';
import { FiSearch } from 'react-icons/fi';


const Header = () =>{
    return(
        <>
        <div className="navcontainer">
            <div className="nav_section">
    
                    <div className="nav_logo">
                    <img className="nav_logo_img" src="https://logos-world.net/wp-content/uploads/2020/04/Puma-Logo-1970-1974.png" alt="" />
                    </div>
                <div className="nav_catgories">
                    <div className="links">New</div>
                    <div className="links">Womem</div>
                    <div className="links">Men</div>
                    <div className="links">Kids</div>
                    <div className="links">Motosport</div>
                    <div className="links">Collborations</div>
                    <div className="links">Sport</div>
                    <div className="links">Sale</div>
                    <div className="links">Palermo</div>
                    
                </div>
            </div>

            <div className="nav_icon">
                 
                <div className="nav_search_icon"><FiSearch></FiSearch></div>
                <div className="nav_search">
                    <input className="nav_input" type="text" placeholder="SEARCH " />
                </div>
                
                <div className="navbar-icons">
                    <div className="navbar-icons-div" ><FiHeart></FiHeart></div>
                    <div className="navbar-icons-div"><BsCart3></BsCart3></div>
                    <div className="navbar-icons-div"><VscAccount></VscAccount></div>
                </div>
            </div>
        </div>

        <div className='nav-bottom'>
            <h3>EXTRA 15% OFF ON ORDERS ABOVE ₹3999*</h3><br/>
                     
        </div>

        <div  className='main-section'>
            <div className='banner_content1'> 
            <button className='btn'>SHOP NOW</button>
            <button className='btn'>CURATED LOOKS</button>
            </div>
        </div>

        <div className='banner2'>
            <div className='banner_content2'>
                <h1>Lowest price of the year</h1>
                <button className='btn1'>LEARN MORE</button>
            </div>
        </div>
        </>
    );
}
export default Header;