import React from 'react'
import AnimatedTable from '../components/animatedTable2'
import { Typography } from '@mui/material'
import { Contact } from '../components/contact'
import JsonData from "../data/data.json";
import BreadCrumb from '../components/BreadCrumbs';
export const metadata = {
    'title': 'DIDX Global Toll Free Coverage | DIDX'
}
const ToolFreeNumbers = () => {
    const landingPageData = JsonData;
    return (
        <>
            <BreadCrumb title={metadata.title}/>
            <div style={{  marginBottom:20}}>
                <Typography
                variant="h4"
                sx={{
                    // fontSize: { xs: "1.1rem", md: "1.25rem" },
                    fontWeight:"bold",
                    mb: 2,
                    mt:5,
                    color: "text.secondary",
                    lineHeight: 1.7,
                    overflowWrap: "break-word",
                    justifySelf:"center",
                     px: { xs: 2, sm: 6, xl: 12 },
                }}
            >
                DIDx is the world's No.1 Direct Inward Dialing numbering (DID Numbers) provider since 2005.
                We currently have Toll Free numbers from over 100+ countries as part of our coverage.
            </Typography>
                <AnimatedTable />
            </div>
            <Contact data={landingPageData.Contact} />
        </>
    )
}

export default ToolFreeNumbers
