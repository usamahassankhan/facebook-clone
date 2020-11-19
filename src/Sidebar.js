import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from"@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from"@material-ui/icons/Chat";
import StorefrontIcon from"@material-ui/icons/Storefront";
import VideoLibraryIcon from"@material-ui/icons/VideoLibrary";
import ExpandMoreOutlinedIcon from"@material-ui/icons/ExpandMoreOutlined";
import React from 'react'
import './Sidebar.css';
import SidebarRow from './SidebarRow';
function Sidebar() {
    return (
        <div className="sidebar">
         
           <SidebarRow  src="https://avatars3.githubusercontent.com/u/50341970?s=460&u=ce6c419bcccdd6d21db4614e60f45e3524198e45&v=4"title='Usama Khan'/>
           <SidebarRow  Icon={LocalHospitalIcon} title="COVID-19 Information Center"/>
           <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
           <SidebarRow Icon={PeopleIcon} title="Friends"/>

           <SidebarRow  Icon={ChatIcon} title="Messenger"/>
           <SidebarRow Icon={StorefrontIcon }title ="Markerplace"/>
           <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
           <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Marketplace"/>
           <SidebarRow/>
            </div>
       
    )
}

export default Sidebar
