import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';

const HeaderContainer = () => {
	return (
        <div className="headerContainer">
            <ImageThumbnail />  
            <div className="headerText">
		        <HeaderTitle />
                <HeaderContent />
            </div> 
        </div>
	)
};

export default HeaderContainer;