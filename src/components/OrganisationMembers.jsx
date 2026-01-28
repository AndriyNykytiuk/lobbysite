import React from 'react';
import Memberitem from './Memberitem';
import membershipsList from '../../membershipsList.json';
import '../css/organistaionsmembers.css';


const OrganisationMembers = () => {
    return (
        <div className='organisation__members'>
            {membershipsList.map((member) => (
                <Memberitem key={member.name} name={member.name} position={member.position} role={member.role} description={member.description} />
            ))}
        </div>
    );
};

export default OrganisationMembers;
