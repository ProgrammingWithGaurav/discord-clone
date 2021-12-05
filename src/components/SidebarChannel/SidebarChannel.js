import React from 'react';
import './SidebarChannel.css';

function SidebarChannel({id, channel}) {
    return (
        <div className="sidebarChannel">
            <h4>
                <span className="sidebarChannel-hash">#</span>
                Youtube
            </h4>
        </div>
    )
}

export default SidebarChannel
