import React, { useRef, useState, useMemo } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { FaSearch, FaFilter } from "react-icons/fa";

const values = [
  ['+355', 'Albania', 2],
  ['+213', 'Algeria', 2],
  ['+244', 'Angola', 2],
  ['+54', 'Argentina', 2],
  ['+61', 'Australia', 2],
  ['+43', 'Austria', 2],
  ['+973', 'Bahrain', 2],
  ['+880', 'Bangladesh', 2],
  ['+1', 'Barbados', 2],
  ['+32', 'Belgium', 2],
  ['+229', 'Benin', 2],
  ['+591', 'Bolivia', 2],
  ['+387', 'Bosnia and Herzegovina', 2],
  ['+55', 'Brazil', 2],
  ['+359', 'Bulgaria', 2],
  ['+855', 'Cambodia', 2],
  ['+1', 'Canada', 2],
  ['+1', 'Cayman Islands', 2],
  ['+56', 'Chile', 2],
  ['+86', 'China', 2],
  ['+57', 'Colombia', 2],
  ['+506', 'Costa Rica', 2],
  ['+385', 'Croatia', 2],
  ['+599', 'Curacao', 2],
  ['+357', 'Cyprus', 2],
  ['+420', 'Czech Republic', 2],
  ['+45', 'Denmark', 2],
  ['+1', 'Dominican Republic', 2],
  ['+503', 'El Salvador', 2],
  ['+372', 'Estonia', 2],
  ['+358', 'Finland', 2],
  ['+33', 'France', 2],
  ['+995', 'Georgia', 2],
  ['+49', 'Germany', 2],
  ['+233', 'Ghana', 2],
  ['+30', 'Greece', 2],
  ['+502', 'Guatemala', 2],
  ['+224', 'Guinea', 2],
  ['+504', 'Honduras', 2],
  ['+852', 'Hong Kong', 2],
  ['+36', 'Hungary', 2],
  ['+354', 'Iceland', 2],
  ['+91', 'India', 2],
  ['+62', 'Indonesia', 2],
  ['+353', 'Ireland', 2],
  ['+972', 'Israel', 2],
  ['+39', 'Italy', 2],
  ['+1', 'Jamaica', 2],
  ['+81', 'Japan', 2],
  ['+962', 'Jordan', 2],
  ['+7', 'Kazakhstan', 2],
  ['+254', 'Kenya', 2],
  ['+686', 'Kuwait', 2],
  ['+996', 'Kyrgyzstan', 2],
  ['+371', 'Latvia', 2],
  ['+370', 'Lithuania', 2],
  ['+352', 'Luxembourg', 2],
  ['+853', 'Macao', 2],
  ['+389', 'North Macedonia', 2],
  ['+60', 'Malaysia', 2],
  ['+356', 'Malta', 2],
  ['+52', 'Mexico', 2],
  ['+373', 'Moldova', 2],
  ['+212', 'Morocco', 2],
  ['+95', 'Myanmar', 2],
  ['+31', 'Netherlands', 2],
  ['+64', 'New Zealand', 2],
  ['+234', 'Nigeria', 2],
  ['+47', 'Norway', 2],
  ['+92', 'Pakistan', 2],
  ['+507', 'Panama', 2],
  ['+595', 'Paraguay', 2],
  ['+51', 'Peru', 2],
  ['+63', 'Philippines', 2],
  ['+48', 'Poland', 2],
  ['+351', 'Portugal', 2],
  ['+1', 'Puerto Rico', 2],
  ['+40', 'Romania', 2],
  ['+7', 'Russia', 2],
  ['+381', 'Serbia', 2],
  ['+248', 'Seychelles', 2],
  ['+65', 'Singapore', 2],
  ['+421', 'Slovakia', 2],
  ['+386', 'Slovenia', 2],
  ['+27', 'South Africa', 2],
  ['+82', 'South Korea', 2],
  ['+34', 'Spain', 2],
  ['+249', 'Sudan', 2],
  ['+49', 'Sweden', 2],
  ['+41', 'Switzerland', 2],
  ['+886', 'Taiwan', 2],
  ['+66', 'Thailand', 2],
  ['+1', 'Trinidad and Tobago', 2],
  ['+216', 'Tunisia', 2],
  ['+90', 'Turkey', 2],
  ['+256', 'Uganda', 2],
  ['+380', 'Ukraine', 2],
  ['+971', 'United Arab Emirates', 2],
  ['+44', 'United Kingdom', 2],
  ['+1', 'United States', 2],
  ['+998', 'Uzbekistan', 2],
  ['+58', 'Venezuela', 2],
  ['+84', 'Vietnam', 2],
  ['+263', 'Zimbabwe', 2]
];

export default function AnimatedTable() {
  const tableRef = useRef();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRegion, setFilterRegion] = useState("");

  // Define regions for countries
  const getRegion = (country) => {
    const europeCountries = ['Albania', 'Austria', 'Belgium', 'Bosnia and Herzegovina', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Georgia', 'Germany', 'Greece', 'Hungary', 'Iceland', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'North Macedonia', 'Malta', 'Moldova', 'Netherlands', 'Norway', 'Poland', 'Portugal', 'Romania', 'Serbia', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Switzerland', 'Turkey', 'Ukraine', 'United Kingdom'];
    const asiaCountries = ['Bangladesh', 'Cambodia', 'China', 'Hong Kong', 'India', 'Indonesia', 'Israel', 'Japan', 'Jordan', 'Kazakhstan', 'Kuwait', 'Kyrgyzstan', 'Macao', 'Malaysia', 'Myanmar', 'Pakistan', 'Philippines', 'Singapore', 'South Korea', 'Taiwan', 'Thailand', 'Uzbekistan', 'Vietnam'];
    const americasCountries = ['Argentina', 'Barbados', 'Bolivia', 'Brazil', 'Canada', 'Cayman Islands', 'Chile', 'Colombia', 'Costa Rica', 'Curacao', 'Dominican Republic', 'El Salvador', 'Guatemala', 'Honduras', 'Jamaica', 'Mexico', 'Panama', 'Paraguay', 'Peru', 'Puerto Rico', 'Trinidad and Tobago', 'United States', 'Venezuela'];
    const africaCountries = ['Algeria', 'Angola', 'Benin', 'Ghana', 'Guinea', 'Kenya', 'Morocco', 'Nigeria', 'Seychelles', 'South Africa', 'Sudan', 'Tunisia', 'Uganda', 'Zimbabwe'];
    
    if (europeCountries.includes(country)) return 'europe';
    if (asiaCountries.includes(country)) return 'asia';
    if (americasCountries.includes(country)) return 'americas';
    if (africaCountries.includes(country)) return 'africa';
    return 'other';
  };

  // Filter and search functionality
  const filteredValues = useMemo(() => {
    return values.filter(([prefix, country, channels]) => {
      const matchesSearch = country.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           prefix.includes(searchTerm);
      const matchesFilter = !filterRegion || getRegion(country) === filterRegion;
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, filterRegion]);

  // useGSAP(() => {
  //   if (tableRef.current) {
  //     gsap.from(tableRef.current.querySelectorAll("tbody tr"), {
  //       opacity: 0,
  //       y: 20,
  //       stagger: 0.05,
  //       duration: 0.6,
  //       ease: "power3.out",
  //     });
  //   }
  // }, [filteredValues]);

  return (
    <div className="animated-table-section">
      <div className="animated-table__header">
        <h3 className="animated-table__title">Available Countries & Regions</h3>
        <p className="animated-table__subtitle">
          Complete list of countries where we provide DID numbers with their respective prefixes
        </p>
        <div className="animated-table__filters">
          <div className="animated-table__search">
            <FaSearch />
            <input 
              type="text" 
              placeholder="Search countries..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="animated-table__filter">
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

      <div className="animated-table__container">
        <table ref={tableRef} className="animated-table">
          <thead>
            <tr>
              <th>Country Code</th>
              <th>Country Name</th>
              <th>Channels</th>
            </tr>
          </thead>
          <tbody>
            {filteredValues.map(([prefix, country, channels], idx) => (
              <tr key={idx}>
                <td className="animated-table__prefix">{prefix}</td>
                <td className="animated-table__country">{country}</td>
                <td className="animated-table__channels">{channels}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredValues.length === 0 && (
          <div className="animated-table__no-results">
            <p>No countries found matching your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}

