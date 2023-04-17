import '../styles/HostRating.css'
import React from 'react'

export default function HostRating(host) {
    return (
        <div>
        <div className='host-container'>
            <p>{host['name']}</p>
            <img src={host['picture']} alt="test"/>
        </div>
        </div>
    )
}