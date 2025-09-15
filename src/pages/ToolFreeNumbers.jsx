import React, { useRef, useState, useMemo } from 'react'
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { FaPhone, FaSearch, FaFilter, FaGlobe } from 'react-icons/fa'
import { Contact } from '../components/contact'
import BreadCrumb from '../components/BreadCrumbs'

export const metadata = {
    'title': 'DIDX Global Toll Free Coverage | DIDX'
}

const ToolFreeNumbers = () => {
    const sectionRef = useRef()
    const [searchTerm, setSearchTerm] = useState("")
    const [filterRegion, setFilterRegion] = useState("")

    // Toll Free Numbers data
    const tollFreeData = [
        [1, "1-855", "Anguilla", 59, 5, 0.3, 30, "YES", "NO", "YES"],
        [2, "1-855", "Antigua and Barbuda", 49, 5, 0.19, 30, "YES", "NO", "YES"],
        [3, "54-822", "Argentina", 40, 50, 0.25, 30, "YES", "NO", "YES"],
        [4, "54-800", "Argentina", 20, 20, 0.2, 30, "YES", "YES", "NO"],
        [5, "61-1800", "Australia", 20, 20, 0.06, 30, "YES", "YES", "YES"],
        [6, "43-800", "Austria", 10, 5, 0.27, 30, "YES", "NO", "YES"],
        [7, "1-8XX", "Bahamas", 20, 15, 0.2, 30, "YES", "YES", "YES"],
        [8, "97-3800", "Bahrain", 12, 10, 0.09, 30, "YES", "NO", "YES"],
        [9, "1-855", "Barbados", 49, 5, 0.18, 30, "YES", "NO", "YES"],
        [10, "375-XXX", "Belarus", 29, 5, 0.52, 30, "YES", "NO", "YES"],
        [11, "32-800", "Belgium", 20, 20, 0.3, 30, "YES", "YES", "YES"],
        [12, "1-800", "Belize", 69, 5, 0.6, 30, "YES", "NO", "YES"],
        [13, "1-855", "Bermuda", 69, 5, 0.6, 30, "YES", "NO", "YES"],
        [14, "591-800", "Bolivia", 20, 15, 0.2, 30, "YES", "YES", "YES"],
        [15, "387-XXX", "Bosnia", 89, 5, 0.4, 30, "YES", "YES", "YES"],
        [16, "269-800", "Botswana", 59, 5, 0.78, 30, "YES", "NO", "YES"],
        [17, "55-800", "Brazil", 10, 3, 0.31, 30, "YES", "NO", "YES"],
        [18, "1-877", "British Virgin Island", 59, 5, 0.27, 30, "YES", "NO", "YES"],
        [19, "673-801", "Brunei", 69, 5, 0.6, 30, "YES", "NO", "YES"],
        [20, "359-800", "Bulgaria", 50, 15, 0.17, 30, "YES", "YES", "YES"],
        [21, "855-XXX", "Cambodia", 69, 5, 0.6, 30, "YES", "NO", "YES"],
        [22, "1-800", "Canada", 6, 6, 0.015, 30, "YES", "NO", "NO"],
        [23, "1-844", "Canada", 1, 1, 0.015, 30, "YES", "NO", "NO"],
        [24, "1-855", "Canada", 1, 1, 0.015, 30, "YES", "NO", "NO"],
        [25, "1-866", "Canada", 1, 1, 0.015, 30, "YES", "NO", "NO"],
        [26, "1-877", "Canada", 1, 1, 0.015, 30, "YES", "NO", "NO"],
        [27, "1-888", "Cayman Island", 49, 5, 0.19, 30, "YES", "NO", "YES"],
        [28, "56-800", "Chile", 18, 18, 0.1, 30, "YES", "NO", "YES"],
        [29, "86-400", "China", 20, 20, 0.25, 30, "YES", "YES", "YES"],
        [30, "1800-57", "Colombia", 20, 15, 0.15, 30, "YES", "YES", "YES"],
        [31, "242-XXX", "Congo", 59, 5, 0.4, 30, "YES", "NO", "YES"],
        [32, "506-800", "Costa Rica", 16, 16, 0.06, 30, "YES", "YES", "YES"],
        [33, "385-800", "Croatia", 12, 12, 0.09, 30, "YES", "NO", "NO"],
        [34, "357-800", "Cyprus", 19, 19, 0.07, 30, "YES", "NO", "YES"],
        [35, "420-800", "Czech Republic", 31, 21, 0.16, 30, "YES", "YES", "YES"],
        [36, "45-808", "Denmark", 12, 12, 0.36, 30, "YES", "NO", "YES"],
        [37, "1-855", "Dominica Islands", 59, 5, 0.3, 30, "YES", "NO", "YES"],
        [38, "1-829", "Dominican Republic", 59, 5, 0.5, 30, "YES", "NO", "YES"],
        [39, "1-849", "Dominican Republic", 59, 5, 0.5, 30, "YES", "NO", "YES"],
        [40, "20-800", "Egypt", 109, 5, 0.75, 30, "YES", "NO", "YES"],
        [41, "503-XXX", "El Salvador", 69, 5, 0.6, 30, "YES", "YES", "YES"],
        [42, "593-1800", "Equador", 95, 20, 0.26, 30, "YES", "YES", "YES"],
        [43, "371-800", "Estonia", 70, 20, 0.58, 30, "YES", "YES", "YES"],
        [44, "679-XXX", "Fiji Islands", 109, 5, 0.79, 30, "YES", "NO", "YES"],
        [45, "358-800", "Finland", 20, 20, 0.18, 30, "YES", "YES", "YES"],
        [46, "33-805", "France", 12, 12, 0.08, 30, "YES", "NO", "NO"],
        [47, "594-800", "French Guiana", 89, 5, 0.39, 30, "YES", "NO", "YES"],
        [48, "49-800", "Germany", 29, 5, 0.13, 30, "YES", "NO", "YES"],
        [49, "233-XXX", "Ghana", 85, 110, 0.2, 30, "YES", "YES", "YES"],
        [50, "30-800", "Greece", 29, 5, 0.12, 30, "YES", "NO", "YES"],
        [51, "1-855", "Grenada", 59, 5, 0.27, 30, "YES", "NO", "YES"],
        [52, "590-800", "Guadeloupe", 20, 20, 0.16, 30, "YES", "YES", "YES"],
        [53, "502-1800", "Guatemala", 60, 20, 0.26, 30, "YES", "YES", "YES"],
        [54, "504-XXX", "Honduras", 159, 5, 0.47, 30, "YES", "YES", "YES"],
        [55, "852-800", "Hong Kong", 20, 20, 0.05, 30, "YES", "YES", "YES"],
        [56, "36-800", "Hungary", 15, 15, 0.16, 30, "YES", "NO", "YES"],
        [57, "354-800", "Iceland", 20, 20, 0.08, 30, "YES", "YES", "YES"],
        [58, "91-800", "India", 20, 20, 0.16, 30, "YES", "YES", "YES"],
        [59, "62-007", "Indonesia", 20, 20, 0.173, 30, "YES", "YES", "YES"],
        [60, "353-800", "Ireland", 10.25, 10.25, 0.02, 30, "YES", "NO", "YES"],
        [61, "972-180", "Israel", 20, 20, 0.08, 30, "YES", "YES", "YES"],
        [62, "39-800", "Italy", 10.25, 10.25, 0.066, 30, "YES", "NO", "NO"],
        [63, "1-876", "Jamaica", 59, 5, 0.18, 30, "YES", "NO", "YES"],
        [64, "81-XXX", "Japan", 20, 20, 0.18, 30, "YES", "YES", "YES"],
        [65, "962-800", "Jordan", 45, 110, 0.17, 30, "YES", "YES", "YES"],
        [66, "7-2520357", "Kazakhstan", 40, 20, 0.26, 30, "YES", "YES", "YES"],
        [67, "254-800", "Kenya", 59, 5, 0.5, 30, "YES", "NO", "YES"],
        [68, "996-800", "Kyrgyzstan", 40, 20, 0.26, 30, "YES", "YES", "YES"],
        [69, "371-800", "Latvia", 20, 20, 0.16, 30, "YES", "YES", "YES"],
        [70, "370-8800", "Lithuania", 29, 5, 0.43, 30, "YES", "YES", "YES"],
        [71, "352-800", "Luxembourg", 20, 20, 0.1, 30, "YES", "YES", "YES"],
        [72, "853-XXX", "Macau", 59, 5, 0.36, 30, "YES", "NO", "YES"],
        [73, "389-800", "Macedonia", 45, 20, 0.42, 30, "YES", "YES", "YES"],
        [74, "60-1800", "Malaysia", 20, 20, 0.11, 30, "YES", "YES", "YES"],
        [75, "596-800", "Martinique", 20, 20, 0.16, 30, "YES", "YES", "YES"],
        [76, "262-800", "Mayotte", 20, 20, 0.16, 30, "YES", "YES", "YES"],
        [77, "52-800", "Mexico", 15, 15, 0.09, 30, "YES", "NO", "NO"],
        [78, "373-800", "Moldova", 20, 20, 0.3, 30, "YES", "YES", "YES"],
        [79, "377-800", "Monaco", 20, 20, 0.08, 30, "YES", "YES", "YES"],
        [80, "382-80", "Montenegro", 89, 5, 0.38, 30, "YES", "NO", "YES"],
        [81, "1-855", "Montserrat", 59, 5, 0.4, 30, "YES", "NO", "YES"],
        [82, "1-800", "Nepal", 59, 5, 0.5, 30, "YES", "NO", "YES"],
        [83, "31-800", "Netherlands", 29, 5, 0.15, 30, "YES", "YES", "YES"],
        [84, "64-800", "New Zealand", 20, 20, 0.29, 30, "YES", "YES", "YES"],
        [85, "505-XXX", "Nicaragua", 89, 5, 0.45, 30, "YES", "YES", "YES"],
        [86, "234-70", "Nigeria", 95, 110, 0.26, 30, "YES", "YES", "YES"],
        [87, "47-800", "Norway", 12, 12, 0.058, 30, "YES", "NO", "NO"],
        [88, "968-8007", "Oman", 150, 5, 0.7, 30, "YES", "YES", "YES"],
        [89, "92-800", "Pakistan", 59, 5, 0.39, 30, "YES", "YES", "YES"],
        [90, "507-800", "Panama", 16, 25, 0.07, 30, "YES", "NO", "NO"],
        [91, "595-9800", "Paraguay", 60, 20, 0.26, 30, "YES", "YES", "YES"],
        [92, "51-800", "Peru", 33, 0.18, 30, "YES", "YES", "YES"],
        [93, "63-1800", "Philippines", 20, 20, 0.22, 30, "YES", "YES", "YES"],
        [94, "48-800", "Poland", 20, 20, 0.11, 30, "YES", "YES", "YES"],
        [95, "351-800", "Portugal", 11.25, 11.25, 0.07, 30, "YES", "NO", "NO"],
        [96, "1-866", "Puerto Rico", 20, 20, 0.09, 30, "YES", "YES", "YES"],
        [97, "974-800", "Qatar", 120, 120, 0.29, 30, "YES", "YES", "YES"],
        [98, "262-805", "Reunion", 20, 20, 0.14, 30, "YES", "YES", "YES"],
        [99, "40-800", "Romania", 20, 20, 0.14, 30, "YES", "YES", "YES"],
        [100, "7-2520357", "Russia", 20, 20, 0.18, 30, "YES", "YES", "YES"],
        [101, "1-855", "Saint Kitts and Nevis", 69, 5, 0.57, 30, "YES", "NO", "YES"],
        [102, "1-855", "Saint Lucia", 59, 5, 0.3, 30, "YES", "NO", "YES"],
        [103, "1-855", "Saint Vincent and the Grenadines", 59, 5, 0.3, 30, "YES", "NO", "YES"],
        [104, "966-800", "Saudi Arabia", 45, 20, 0.18, 30, "YES", "YES", "YES"],
        [105, "381-800", "Serbia", 41, 41, 0.19, 30, "YES", "NO", "YES"],
        [106, "65-800", "Singapore", 20, 20, 0.04, 30, "YES", "YES", "YES"],
        [107, "421-800", "Slovak Republic", 29, 5, 0.3, 30, "YES", "NO", "YES"],
        [108, "386-80", "Slovenia", 13, 13, 0.15, 30, "YES", "NO", "YES"],
        [109, "27-800", "South Africa", 24, 24, 0.08, 30, "YES", "YES", "YES"],
        [110, "82-808", "South Korea", 18, 18, 0.05, 30, "YES", "NO", "YES"],
        [111, "34-900", "Spain", 29, 5, 0.13, 30, "YES", "YES", "YES"],
        [112, "94-112", "Sri Lanka", 59, 5, 0.4, 30, "YES", "NO", "YES"],
        [113, "46-20", "Sweden", 18, 18, 0.07, 30, "YES", "NO", "YES"],
        [114, "41-800", "Switzerland", 29, 5, 0.15, 30, "YES", "NO", "YES"],
        [115, "886-800", "Taiwan", 59, 5, 0.4, 30, "YES", "NO", "YES"],
        [116, "255-XXX", "Tanzania", 59, 5, 0.27, 30, "YES", "NO", "YES"],
        [117, "66-1800", "Thailand", 20, 20, 0.2, 30, "YES", "YES", "YES"],
        [118, "1-855", "Trinidad and Tobago", 59, 5, 0.4, 30, "YES", "NO", "YES"],
        [119, "1-866", "Trinidad and Tobago", 59, 5, 0.4, 30, "YES", "NO", "YES"],
        [120, "1-868", "Trinidad and Tobago", 59, 5, 0.4, 30, "YES", "NO", "YES"],
        [121, "90-850", "Turkey", 30, 30, 0.05, 30, "YES", "NO", "YES"],
        [122, "1-800", "Turks And Caicos Island", 49, 5, 0.18, 30, "YES", "NO", "YES"],
        [123, "1-877", "Turks And Caicos Island", 49, 5, 0.18, 30, "YES", "NO", "YES"],
        [124, "256-800", "Uganda", 85, 110, 0.2, 30, "YES", "YES", "YES"],
        [125, "380-800", "Ukraine", 20, 20, 0.2, 30, "YES", "YES", "YES"],
        [126, "971-800", "United Arab Emirates", 149, 5, 0.57, 30, "YES", "YES", "YES"],
        [127, "44-800", "United Kingdom", 3, 2, 0.05, 30, "YES", "NO", "NO"],
        [128, "44-808", "United Kingdom", 3, 2, 0.05, 30, "YES", "NO", "NO"],
        [129, "598-405", "Uruguay", 20, 20, 0.17, 30, "YES", "YES", "YES"],
        [130, "1-800", "USA", 2, 1, 0.02, 30, "YES", "NO", "NO"],
        [131, "1-833", "USA", 2, 1, 0.02, 30, "YES", "NO", "NO"],
        [132, "1-844", "USA", 2, 1, 0.02, 30, "YES", "NO", "NO"],
        [133, "1-855", "USA", 2, 1, 0.02, 30, "YES", "NO", "NO"],
        [134, "1-866", "USA", 2, 1, 0.02, 30, "YES", "NO", "NO"],
        [135, "1-877", "USA", 2, 1, 0.02, 30, "YES", "NO", "NO"],
        [136, "1-888", "USA", 2, 1, 0.02, 30, "YES", "NO", "NO"],
        [137, "998-800", "Uzbekistan", 50, 20, 0.27, 30, "YES", "YES", "YES"],
        [138, "58-800", "Venezuela", 20, 20, 0.23, 30, "YES", "YES", "YES"],
        [139, "84-4", "Vietnam", 20, 20, 0.27, 30, "YES", "YES", "YES"],
        [140, "1-844", "Virgin Islands (U.S)", 5, 8, 0.08, 30, "YES", "NO", "YES"],
        [141, "1-855", "Virgin Islands (U.S)", 5, 8, 0.08, 30, "YES", "NO", "YES"],
        [142, "1-866", "Virgin Islands (U.S)", 5, 8, 0.08, 30, "YES", "NO", "YES"],
        [143, "1-877", "Virgin Islands (U.S)", 5, 8, 0.08, 30, "YES", "NO", "YES"],
        [144, "1-888", "Virgin Islands (U.S)", 5, 8, 0.08, 30, "YES", "NO", "YES"]
    ]

    // Define regions for countries
    const getRegion = (country) => {
        const europeCountries = ['Austria', 'Belgium', 'Bosnia', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Iceland', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Macedonia', 'Malta', 'Moldova', 'Monaco', 'Montenegro', 'Netherlands', 'Norway', 'Poland', 'Portugal', 'Romania', 'Serbia', 'Slovak Republic', 'Slovenia', 'Spain', 'Sweden', 'Switzerland', 'Turkey', 'Ukraine', 'United Kingdom']
        const asiaCountries = ['Bangladesh', 'Cambodia', 'China', 'Hong Kong', 'India', 'Indonesia', 'Israel', 'Japan', 'Jordan', 'Kazakhstan', 'Kyrgyzstan', 'Macau', 'Malaysia', 'Nepal', 'Pakistan', 'Philippines', 'Singapore', 'South Korea', 'Sri Lanka', 'Taiwan', 'Thailand', 'Uzbekistan', 'Vietnam']
        const americasCountries = ['Argentina', 'Barbados', 'Belize', 'Bermuda', 'Bolivia', 'Brazil', 'Canada', 'Cayman Island', 'Chile', 'Colombia', 'Costa Rica', 'Dominican Republic', 'El Salvador', 'Equador', 'French Guiana', 'Guatemala', 'Honduras', 'Jamaica', 'Mexico', 'Nicaragua', 'Panama', 'Paraguay', 'Peru', 'Puerto Rico', 'Trinidad and Tobago', 'USA', 'Venezuela', 'Virgin Islands (U.S)']
        const africaCountries = ['Egypt', 'Ghana', 'Kenya', 'Nigeria', 'South Africa', 'Tanzania', 'Uganda']
        const caribbeanCountries = ['Anguilla', 'Antigua and Barbuda', 'Bahamas', 'British Virgin Island', 'Brunei', 'Dominica Islands', 'Grenada', 'Guadeloupe', 'Martinique', 'Mayotte', 'Montserrat', 'Reunion', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Turks And Caicos Island']
        
        if (europeCountries.includes(country)) return 'europe'
        if (asiaCountries.includes(country)) return 'asia'
        if (americasCountries.includes(country)) return 'americas'
        if (africaCountries.includes(country)) return 'africa'
        if (caribbeanCountries.includes(country)) return 'caribbean'
        return 'other'
    }

    // Filter and search functionality
    const filteredData = useMemo(() => {
        return tollFreeData.filter(([sno, code, country, mrc, nrc, ppm, channels, expandability, service, document]) => {
            const matchesSearch = country.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                 code.toLowerCase().includes(searchTerm.toLowerCase())
            const matchesFilter = !filterRegion || getRegion(country) === filterRegion
            return matchesSearch && matchesFilter
        })
    }, [searchTerm, filterRegion])

    useGSAP(() => {
        if (sectionRef.current) {
            gsap.from(sectionRef.current.querySelectorAll(".tollfree-section"), {
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
            
            <section className="tollfree-page">
                <div className="tollfree-container">
                    <div className="tollfree-content">
                        {/* Hero Section */}
                        <div className="tollfree-hero tollfree-section">
                            <div className="tollfree-hero__icon">
                                <FaPhone />
                            </div>
                            <h1 className="tollfree-hero__title">Global Toll Free Numbers</h1>
                            <p className="tollfree-hero__subtitle">
                                DIDX is the world's No.1 Direct Inward Dialing numbering (DID Numbers) provider since 2005.
                                We currently have Toll Free numbers from over 100+ countries as part of our coverage.
                            </p>
                            {/* <div className="tollfree-hero__stats">
                                <div className="tollfree-hero__stat">
                                    <span className="tollfree-hero__stat-number">100+</span>
                                    <span className="tollfree-hero__stat-label">Countries</span>
                                </div>
                                <div className="tollfree-hero__stat">
                                    <span className="tollfree-hero__stat-number">144</span>
                                    <span className="tollfree-hero__stat-label">Toll Free Numbers</span>
                                </div>
                                <div className="tollfree-hero__stat">
                                    <span className="tollfree-hero__stat-number">24/7</span>
                                    <span className="tollfree-hero__stat-label">Support</span>
                                </div>
                            </div> */}
                        </div>

                        {/* Table Section */}
                        <div className="tollfree-table-section tollfree-section" ref={sectionRef}>
                            <div className="tollfree-table__header">
                                <h2 className="tollfree-table__title">Available Toll Free Numbers</h2>
                                <p className="tollfree-table__subtitle">
                                    Complete list of toll free numbers with pricing and availability across different countries
                                </p>
                                <div className="tollfree-table__filters">
                                    <div className="tollfree-table__search">
                                        <FaSearch />
                                        <input 
                                            type="text" 
                                            placeholder="Search countries or codes..." 
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                        />
                                    </div>
                                    <div className="tollfree-table__filter">
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
                                            <option value="caribbean">Caribbean</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="tollfree-table__container">
                                <table className="tollfree-table">
                                    <thead>
                                        <tr>
                                            <th>S.No</th>
                                            <th>Phone Code</th>
                                            <th>Country</th>
                                            <th>MRC</th>
                                            <th>NRC</th>
                                            <th>PPM</th>
                                            <th>Channels</th>
                                            <th>Expandability</th>
                                            <th>Service Restriction</th>
                                            <th>Document Restriction</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredData.map(([sno, code, country, mrc, nrc, ppm, channels, expandability, service, document], idx) => (
                                            <tr key={idx}>
                                                <td className="tollfree-table__sno">{sno}</td>
                                                <td className="tollfree-table__code">{code}</td>
                                                <td className="tollfree-table__country">{country}</td>
                                                <td className="tollfree-table__mrc">{mrc}</td>
                                                <td className="tollfree-table__nrc">{nrc}</td>
                                                <td className="tollfree-table__ppm">{ppm}</td>
                                                <td className="tollfree-table__channels">{channels}</td>
                                                <td className="tollfree-table__expandability">{expandability}</td>
                                                <td className="tollfree-table__service">{service}</td>
                                                <td className="tollfree-table__document">{document}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {filteredData.length === 0 && (
                                    <div className="tollfree-table__no-results">
                                        <p>No toll free numbers found matching your search criteria.</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="tollfree-cta-section tollfree-section">
                            <div className="tollfree-cta">
                                <h3 className="tollfree-cta__title">Need Toll Free Numbers in a Different Country?</h3>
                                <p className="tollfree-cta__subtitle">
                                    Don't see your target country? Contact us with your requirements and we'll work to add it to our network.
                                </p>
                                <a href="/contact" className="tollfree-cta__btn">
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

export default ToolFreeNumbers
