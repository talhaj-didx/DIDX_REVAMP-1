import React, { useRef, useState, useMemo } from 'react'
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { FaPhone, FaSearch, FaFilter, FaGlobe } from 'react-icons/fa'
import { Contact } from '../components/contact'
import BreadCrumb from '../components/BreadCrumbs'
import { useApi } from '../hooks/useApi'
import { channelRatesSection } from '../services/dataServices'

export const metadata = {
    'title': 'DIDX Channel Rates | DIDX'
}

const Channel = () => {
    const sectionRef = useRef()
    const [searchTerm, setSearchTerm] = useState("")
    const [filterRegion, setFilterRegion] = useState("")

    const {data, isLoading, error} = useApi({
        queryKey:"channel-rates",
        queryFn: channelRatesSection
    })

    const {data : channelData} = data ?? {};

    // Filter and search functionality
    const filteredData = useMemo(() => {
        if (!channelData || !Array.isArray(channelData)) {
            return []
        }
        return channelData.filter((item) => {
            const matchesSearch = item?.country?.toLowerCase().includes(searchTerm.toLowerCase())
            const matchesFilter = !filterRegion || item?.region === filterRegion
            return matchesSearch && matchesFilter
        })
    }, [channelData, searchTerm, filterRegion])

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
                                {isLoading ? (
                                    <div className="channel-table__loading">
                                        <p>Loading channel rates...</p>
                                    </div>
                                ) : error ? (
                                    <div className="channel-table__error">
                                        <p>Error loading channel rates. Please try again later.</p>
                                    </div>
                                ) : (
                                    <>
                                        <table className="channel-table">
                                            <thead>
                                                <tr>
                                                    <th>Country</th>
                                                    <th>Extra Channel Setup Charges</th>
                                                    <th>Extra Channel Monthly Recurring Charges</th>
                                                    <th>DID Setup Price</th>
                                                    <th>DID Per Month Price</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {filteredData.map((item) => (
                                                    <tr key={item.id}>
                                                        <td className="channel-table__country">{item.country}</td>
                                                        <td className="channel-table__nrc">{item.extraChannelSetupCharges}</td>
                                                        <td className="channel-table__mrc">{item.extraChannelMonthlyRecurringCharges}</td>
                                                        <td className="channel-table__ppm">{item.didSetupPrice}</td>
                                                        <td className="channel-table__additional">{item.didPerMonthPrice}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        {filteredData.length === 0 && !isLoading && (
                                            <div className="channel-table__no-results">
                                                <p>No countries found matching your search criteria.</p>
                                            </div>
                                        )}
                                    </>
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
