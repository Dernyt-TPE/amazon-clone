import React from 'react'
import './Header.css'
import logo from './images/amazon logo.png'
import location from './images/location.png'
import flag from './images/Indian-flag.png'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase'


function Header() {

    const [{ cart, user }, dispatch] = useStateValue();
    const signinAuth = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className='header'>

            <Link to='/'>
                <img className='header-logo' src={logo} alt='Amazon Logo' /><p className='country'>.in</p>
            </Link>

            <img className='location-icon' style={{ paddingLeft: '12px' }} src={location} alt='Location' />

            <div className='header-col' style={{ padding: '12px' }}>

                <span className='header-opt-line1'>Deliver to {!user ? 'Guest' : user.email}</span>
                <span className='header-opt-line2'>Delhi 220001</span>
            </div>
            <div className='header-search'>
                <input className='header-search-input' type="text" />
                <SearchIcon className='header-search-icon' />
            </div>

            <img className='flag-icon' src={flag} alt='Location' />

            <div className='header-nav'>
                <Link to={!user && '/login'}>

                    <div onClick={signinAuth} className='header-col'>
                        <span className='header-opt-line1'>Hello, {!user ? 'Guest' : user.email}</span>
                        <span className='header-opt-line2'>{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>

                </Link>


                <Link to='/orders'>
                    <div className='header-col'>
                        <span className='header-opt-line1'>Returns</span>
                        <span className='header-opt-line2'>& Orders</span>
                    </div>
                </Link>

                {/* <div className='header-col'>
                    <span className='header-opt-line1'>Your</span>
                    <span className='header-opt-line2'>Prime</span>
                </div> */}

                <Link to='/checkout'>

                    <div className='header-cart'>
                        <ShoppingCartOutlinedIcon />
                        <span className='header-opt-line2 header-cart-count'>{cart?.length}</span>


                    </div>

                </Link>


            </div>
        </div>
    )
}

export default Header
