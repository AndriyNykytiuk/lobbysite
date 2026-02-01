import React from 'react'
import '../css/main.css'
import Slider from './Slider'
import FirstPage from './FirstPage'
import AboutUs from './AboutUs'
import WhoWeAre from './WhoWeAre'
import EthicPolice from './EthicPolice'
import Membership from './Membership'
import Calendar from './Calendar'
import { Routes, Route } from 'react-router-dom'
import OrganisationMembers from './OrganisationMembers'
import MembershipTicket from './MembershipTicket'
import Actual from './Actual'

const Main = () => {
    return (
        <main className="main">
            <div className="main__container">
                <Routes>
                    <Route path="/" element={<FirstPage />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/about/who-we-are" element={<WhoWeAre />} />
                    <Route path="/about/ethic-police" element={<EthicPolice />} />
                    <Route path="/about/membership" element={<Membership />} />
                    <Route path="/about/Organisationmembers" element={<OrganisationMembers />} />
                    <Route path="/Calendar" element={<Calendar/>}/>
                    <Route path="/Actual" element={<Actual/>}/>
                    <Route path="/MembershipTicket" element={<MembershipTicket/>}/>
                </Routes>
                <Slider />
            </div>
        </main>
    )
}

export default Main
