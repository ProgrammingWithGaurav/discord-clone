import React from 'react';
import { useDispatch } from 'react-redux';
import { setChannelId } from '../../features/appSlice';
import './SidebarChannel.css';

function SidebarChannel({id, channelName}) {
    const dispatch = useDispatch(setChannelId);
    return (
        <div className="sidebarChannel">
            <h4>
                <span className="sidebarChannel-hash">#</span>
                {channelName}
            </h4>
        </div>
    )
}

export default SidebarChannel
