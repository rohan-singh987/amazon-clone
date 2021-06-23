import React from "react";
import "./Header.css";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

function Header() {
    return (
        <div className="header">
            <img
                className="header_logo"
                src="https://pngimg.com/uploads/amazon/amazon_PNG24.png"/>

            <div className="header_search">
                <input className="header_searchInput" type="text" />
                <SearchOutlinedIcon className='header_searchIcon' />
            </div>

            <div className="header_nav">
                <div className='header_option'>
                    <span className='header_optionLineOne'>Hello Guest</span>
                    <span className='header_optionLineTwo'>Sign In</span>
                </div>

                <div className='header_option'>
                    <span className='header_optionLineOne'>Returns</span>
                    <span className='header_optionLineTwo'>& orders</span>
                </div>

                <div className='header_option'>
                    <span className='header_optionLineOne'>your</span>
                    <span className='header_optionLineTwo'>Prime</span>
                </div>


            </div>
        </div>
    );
}

export default Header;
