import React from 'react';
import membercardList from '/boardMembers.json'
import Membercard from './Membercard'

import '../css/membership.css'
const Membership = () => {
    return (
        <div>
            <div className='membership-wrapper'>
                <h2 className='title__membership'>
                    Члени <span>правління</span>
                </h2>
                <div className='membership-content'>
                    {membercardList.map((member) => (
                        <Membercard key={member.id} img={member.image} name={member.name} title={member.title} article1={member.article1} article2={member.article2}  />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Membership;
