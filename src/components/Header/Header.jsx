import React from 'react';
import { Container, Form } from 'reactstrap';
import logo from '../../assets/images/sbry.png';
import { NavLink, Link } from 'react-router-dom';

const nav_links = [
  {
    display: 'Home',
    path: '/home'
  },
  {
    display: 'Foods',
    path: '/foods'
  },
  {
    display: 'Cart',
    path: '/cart'
  },
  {
    display: 'Contact',
    path: '/contact'
  },
]

const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="nav_wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} 
            style={{width:'50px'}} alt=' logo' />
            <h5>DelishDeliveries</h5>
          </div>
      
{/* ==================  menu ================= */}

        <div className="navigation">
          <div className="menu d-flex align-items-center gap-5">
            {
              nav_links.map((item,index)=>(
                <NavLink to={item.path} key={index}>{item.display}</NavLink>
              ))
            }
          </div>
        </div>

{/* ================ nav right icons ============ */}
         <div className="nav_right d-flex align-items-center gap-4">
          <span className="cart_icon">
            <i class="ri-shopping-basket-fill"></i>
            <span className="cart_badge">2</span>
          </span>

          <span className="user">
            <Link to='/login'><i class="ri-user-5-line"></i></Link>
          </span>

          <span className="mobile_menu">
            <i class="ri-menu-add-fill"></i>
          </span>
         </div>

        </div>
      </Container>
    </header>
  )
}

export default Header;