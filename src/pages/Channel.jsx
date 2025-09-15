import React, { useRef, useState, useMemo } from 'react'
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { FaPhone, FaSearch, FaFilter, FaGlobe } from 'react-icons/fa'
import { Contact } from '../components/contact'
import BreadCrumb from '../components/BreadCrumbs'

export const metadata = {
    'title': 'DIDX Channel Rates | DIDX'
}

const Channel = () => {
    const sectionRef = useRef()
    const [searchTerm, setSearchTerm] = useState("")
    const [filterRegion, setFilterRegion] = useState("")

    // Table headings
    const headings = ['Country', 'Extra Channel Setup Charges', 'Extra Channel Monthly Recurring Charges', 'DID Setup Price', 'DID Per Month Price'];

    // Channel rates data
    const channelData = [
        ['Anguilla', '$0', '$12', '$1.25', '$1.25'],
        ['Argentina', '$15', '$23.50', '$1', '$2.52'],
        ['Australia', '$0', '$5', '$1', '$3.40'],
        ['Austria', '$15', '$23.50', '$1', '$3.95'],
        ['Belgium', '$15', '$23.50', '$4', '$5'],
        ['Brazil', '$15', '$23.50', '$0', '$3'],
        ['Canada', '$0', '$15', '$0', '$0.70'],
        ['Chile', '$15', '$23.50', '$1', '$6.50'],
        ['Colombia', '$0', '$10', '$1', '$12.50'],
        ['Costa Rica', '$0', '$10', '$1', '$10'],
        ['Cyprus', '$15', '$23.50', '$1', '$4.75'],
        ['Czech Republic', '$15', '$23.50', '$1', '$5'],
        ['Dominican Republic', '$0', '$10', '$1', '$5.63'],
        ['Egypt', '$10', '$10', '$20.90', '$20'],
        ['El Salvador', '$15', '$23.50', '$8', '$9'],
        ['France', '$0', '$10', '$0', '$0.19'],
        ['Germany', '$2', '$8', '$1', '$5'],
        ['Ghana', '$0', '$5', '$18', '$15'],
        ['Guatemala', '$0', '$10', '$1', '$12.50'],
        ['Hong Kong', '$0', '$5', '$1', '$5.50'],
        ['Israel', '$15', '$23.50', '$1', '$4.75'],
        ['Italy', '$15', '$23.50', '$1', '$3.50'],
        ['Jamaica', '$0', '$5', '$22', '$22'],
        ['Japan', '$15', '$23.50', '$1', '$4.75'],
        ['Latvia', '$0', '$5', '$0.25', '$0.75'],
        ['Malta', '$15', '$23.50', '$1', '$7'],
        ['Mexico', '$1', '$5.50', '$1', '$3'],
        ['Netherlands', '$0', '$5', '$0.99', '$0.99'],
        ['New Zealand', '$0', '$7', '$1', '$3'],
        ['Panama', '$0', '$10', '$1', '$12.50'],
        ['Peru', '$15', '$23.50', '$1', '$6.25'],
        ['Singapore', '$0', '$5', '$2', '$6.60'],
        ['Slovak Republic', '$15', '$23.50', '$1', '$5'],
        ['South Africa', '$0', '$5', '$0', '$2.65'],
        ['Sweden', '$15', '$23.50', '$1', '$3.95'],
        ['Switzerland', '$0', '$5', '$2.95', '$3.95'],
        ['United Kingdom', '$0', '$7', '$1', '$2.63'],
        ['USA', '$0', '$5', '$0', '$0.15'],
        ['Venezuela', '$0', '$10', '$1', '$12.50']
    ]

    // Define regions for countries
    const getRegion = (country) => {
        const europeCountries = ['Austria', 'Belgium', 'Cyprus', 'Czech Republic', 'France', 'Germany', 'Italy', 'Latvia', 'Malta', 'Netherlands', 'Slovak Republic', 'Sweden', 'Switzerland', 'United Kingdom']
        const asiaCountries = ['Australia', 'Hong Kong', 'Israel', 'Japan', 'Singapore']
        const americasCountries = ['Anguilla', 'Argentina', 'Brazil', 'Canada', 'Chile', 'Colombia', 'Costa Rica', 'Dominican Republic', 'El Salvador', 'Guatemala', 'Jamaica', 'Mexico', 'Panama', 'Peru', 'USA', 'Venezuela']
        const africaCountries = ['Egypt', 'Ghana', 'South Africa']
        
        if (europeCountries.includes(country)) return 'europe'
        if (asiaCountries.includes(country)) return 'asia'
        if (americasCountries.includes(country)) return 'americas'
        if (africaCountries.includes(country)) return 'africa'
        return 'other'
    }

    // Filter and search functionality
    const filteredData = useMemo(() => {
        return channelData.filter(([country, nrc, mrc, ppm, additional]) => {
            const matchesSearch = country.toLowerCase().includes(searchTerm.toLowerCase())
            const matchesFilter = !filterRegion || getRegion(country) === filterRegion
            return matchesSearch && matchesFilter
        })
    }, [searchTerm, filterRegion])

    useGSAP(() => {
        if (sectionRef.current) {
            gsap.from(sectionRef.current.querySelectorAll(".channel-section"), {
                opacity: 0,
                y: 30,
                stagger: 0.2,
                duration: 0.8,
                ease: "power3.out",
            })
        }
    }, [])

    return (
        <>
            <BreadCrumb title={metadata.title}/>
            
            <section className="channel-page">
                <div className="channel-container">
                    <div className="channel-content">
                        {/* Hero Section */}
                        <div className="channel-hero channel-section">
                            <div className="channel-hero__content">
                                <div className="channel-hero__icon">
                                    <FaPhone />
                                </div>
                                <h1 className="channel-hero__title">Channel Rates</h1>
                                <p className="channel-hero__subtitle">
                                    DIDx is a wholesale DID trading market with a reliable platform since 2005 to Buy, Sell, and Trade DID phone numbers.
                                </p>
                                <p className="channel-hero__additional-info">
                                    This wholesale marketplace enables the sale and purchase of DIDs with Channels (enabling multiple calls at one time.) Such service can include unlimited incoming calls and the option to purchase additional channels paths to use with DID phone numbers as needed.
                                </p>
                            </div>
                            <div className="channel-hero__image">
                                <img src="/img/channel-dark.jpg" alt="Channel Rates" />
                            </div>
                        </div>

                        {/* Table Section */}
                        <div className="channel-table-section channel-section" ref={sectionRef}>
                            <div className="channel-table__header">
                                <p className="channel-table__additional-info">
                                    The following area codes have additional channels available. Below are sample rates. Log in to your business DIDX dashboard to view exact rates and to manage DIDs and channels.
                                </p>
                                <div className="channel-table__filters">
                                    <div className="channel-table__search">
                                        <FaSearch />
                                        <input 
                                            type="text" 
                                            placeholder="Search countries..." 
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                        />
                                    </div>
                                    <div className="channel-table__filter">
                                        <FaFilter />
                                        <select 
                                            value={filterRegion}
                                            onChange={(e) => setFilterRegion(e.target.value)}
                                        >
                                            <option value="">All Regions</option>
                                            <option value="europe">Europe</option>
                                            <option value="asia">Asia</option>
                                            <option value="americas">Americas</option>
                                            <option value="africa">Africa</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="channel-table__container">
                                <table className="channel-table">
                                    <thead>
                                        <tr>
                                            {headings.map((heading, index) => (
                                                <th key={index}>{heading}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredData.map(([country, nrc, mrc, ppm, additional], idx) => (
                                            <tr key={idx}>
                                                <td className="channel-table__country">{country}</td>
                                                <td className="channel-table__nrc">{nrc}</td>
                                                <td className="channel-table__mrc">{mrc}</td>
                                                <td className="channel-table__ppm">{ppm}</td>
                                                <td className="channel-table__additional">{additional}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {filteredData.length === 0 && (
                                    <div className="channel-table__no-results">
                                        <p>No countries found matching your search criteria.</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="channel-cta-section channel-section">
                            <div className="channel-cta">
                                <h3 className="channel-cta__title">Need Channel Information for a Different Country?</h3>
                                <p className="channel-cta__subtitle">
                                    Don't see your target country? Contact us with your requirements and we'll work to add it to our network.
                                </p>
                                <a href="/contact" className="channel-cta__btn">
                                    Request New Coverage
                                    <FaGlobe />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <Contact />
        </>
    )
}

export default Channel
