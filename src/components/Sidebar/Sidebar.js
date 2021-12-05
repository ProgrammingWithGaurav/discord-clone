import React from 'react';
import './Sidebar.css';
import SidebarChannel from '../SidebarChannel/SidebarChannel';
// Icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add'
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CallIcon from '@material-ui/icons/Call';
import { Avatar } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <h3>Sidebar Top</h3>
                <ExpandMoreIcon />
            </div>

            <div className="sidebar-channels">
                <div className="sidebar-channelsHeader">
                    <div className="sidebar-header">
                        <ExpandMoreIcon />
                        <h4>Text Channels</h4>
                    </div>

                    <AddIcon className="sidebar-addChannel" />
                </div>

                <div className="sidebar-channelList">
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                </div>
            </div>

            <div className="sidebar-voice">
                <SignalCellularAltIcon className="sidebar-voiceIcon" fontSize="large" />
                <div className="sidebar-voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>
                <div className="sidebar-voiceIcons">
                    <InfoOutlinedIcon />
                    <CallIcon />
                </div>
            </div>

            <div className="sidebar-profile">
                <Avatar src="https://cdn.discordapp.com/avatars/840544902998786058/36bbfd61d6cbd4b3569e62c554f7f3f1.webp?size=128"/>
                <div className="sidebar-profileInfo">
                    <h3>@ProgrammingWithGaurav</h3>
                    <p>#1945</p>
                </div>
                <div className="sidebar-profileIcons">
                    <MicIcon />
                    <HeadsetIcon />
                    <SettingsIcon />
                </div>
            </div>

        </div>
    )
}

export default Sidebar
