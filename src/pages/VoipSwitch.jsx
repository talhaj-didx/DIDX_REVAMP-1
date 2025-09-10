import React, { useRef } from "react";
import BreadCrumb from "../components/BreadCrumbs";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Typography,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Link,
} from "@mui/material";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Contact } from "../components/contact";


export const metadata = {
  title: "VOIP Switch | DIDX",
};

const headings = ["*IP Addresses", "*DNS"];

const values = [
  ["98.101.50.4", "sip4.didx.net"],
  ["67.228.182.162", "sip8.didx.net"],
  ["66.228.114.228", "sip10.didx.net"],
  ["159.203.27.198", "ca.didx.net"],
  ["188.166.168.173", "eu2.didx.net"],
  ["46.101.80.13", "eu3.didx.net"],
  ["198.199.87.53", "us1.didx.net"],
  ["162.243.107.173", "us2.didx.net"],
];

export default function VoipSwitch() {
  const sectionRef = useRef();
  

  useGSAP(() => {
    gsap.from(sectionRef.current.children, {
      opacity: 0,
      y: 40,
      duration: 0.6,
      stagger: 0.15,
      ease: "power3.out",
    });
  });

  const textStyle = {
    fontSize: { xs: "1.1rem", md: "1.5rem" },
    color: "text.secondary",
    lineHeight: 1.7,
    overflowWrap: "break-word",
  };

  return (
    <>
      <BreadCrumb title={metadata.title} />
      <Container maxWidth="lg">
        <Box
          ref={sectionRef}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            py: 6,
          }}
        >
          {/* Heading */}
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: "600", color: "text.secondary", textTransform: "uppercase", mt: 4 }}
          >
            How to use DID from DIDX on{" "}
            <Link
              href="https://voipswitch.com"
              target="_blank"
              rel="noopener"
              sx={{ color: "primary.main", fontWeight: "600" }}
            >
              voipswitch.com
            </Link>
          </Typography>

          <Typography sx={textStyle} color="text.primary">
            This has been provided to us by voipswitch support team.
          </Typography>
          <Typography sx={textStyle} color="text.primary">
            In ‘GW clients’ menu you need to create a new client, with the following Parameters:
          </Typography>
          <Typography sx={textStyle} color="text.primary">
            In ‘login’ and ‘password’ you put whatever you want.
          </Typography>
          <Typography sx={textStyle} color="text.primary">
            In ‘IP numbers’ you need to add all the didx.net IP addresses.
          </Typography>

          {/* SubHeading */}
          <Typography
            variant="h5"
            component="h3"
            sx={{ fontWeight: "600", color: "text.secondary", mt: 5 }}
          >
            Our IP addresses are:
          </Typography>

          {/* Table with updated theming */}
          <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2 }}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#004080" }}>
                  {headings.map((head) => (
                    <TableCell
                      key={head}
                      sx={{
                        fontSize: "12px",
                        fontWeight: "bold",
                        color: "#fff",
                        borderRight: 1,
                        borderColor: "divider",
                      }}
                    >
                      {head}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {values.map((row, i) => (
                  <TableRow key={i} sx={{ backgroundColor: i % 2 === 0 ? "#e6f2ff" : "#ffffff" }}>
                    {row.map((value, j) => (
                      <TableCell key={j} sx={{ fontSize: "12px", color: "#333", borderRight: 1, borderColor: "divider" }}>
                        {value}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Description */}
          <Typography sx={textStyle} color="text.primary">
            Check the box ‘PIN source’ if you want to use the voipswitch IVR without DID’s
          </Typography>
          <Typography sx={textStyle} color="text.primary">Check the box ‘active’</Typography>
          <Typography sx={textStyle} color="text.primary">
            Uncheck the box ‘Authorize by login/password’
          </Typography>
          <Typography sx={textStyle} color="text.primary">
            In ‘tariff’ choose a special tariff such that you do not bill calls coming from DIDX
          </Typography>
          <Typography sx={textStyle} color="text.primary">
            Add some funds to the account. From now the calls sent from the provider are reaching
            the voipswitch.
          </Typography>
          <Typography sx={textStyle} color="text.primary">
            The next step depends on what you want to achieve, in order to use them for calling cards
            the DNIS must be pointed to proper IVR scenario in the dialing plan. For example set the
            URI in didx web page to be 1111@yourvoipswitchaddress. It will cause that all calls going
            to the DID will appear on voipswitch with DNIS 1111. Add this number into the dialing
            plan and point to the IVR.
          </Typography>

          <Typography sx={textStyle} fontWeight={"bold"} color="text.primary">
            Mapping the DID to a user:
          </Typography>
          <Typography sx={textStyle} color="text.primary">
            Add the DID into the dialing plan, select “Internal gatekeeper” or “pc2phone clients”
          </Typography>
          <Typography sx={textStyle} color="text.primary">
            checkbox and then from the list of the available users pick the one to which the DID
            will be assigned.
          </Typography>
          <Typography sx={textStyle} color="text.primary">
            Voipswitch and DIDx announce exclusive offer for voipswitch customers.
          </Typography>
          <Typography sx={textStyle} color="text.primary">
            Order 1000 phone numbers from the USA for as little as $150 per month!!!
          </Typography>
          <Typography sx={textStyle} color="text.primary">
            Allow your clients to experience the benefits of the next generation telephony.
          </Typography>
          <Typography sx={textStyle} color="text.primary">
            For only 15 cents per month per number you can offer your clientele incoming calls to
            their VoIP devices.
          </Typography>

          {/* How it works */}
          <Typography variant="h4" sx={{ fontWeight: "600", color: "text.secondary", mt: 5 }}>
            How it works:
          </Typography>
          <Typography sx={textStyle} color="text.primary">1. Purchase a block of US numbers from DIDx</Typography>
          <Typography sx={textStyle} color="text.primary">2. Import the block to Voipswitch via its DID API</Typography>
          <Typography sx={textStyle} color="text.primary">3. Configure the online Sign Up component to use DID phone number as a username</Typography>
          <Typography sx={textStyle} color="text.primary">4. Set the imported US numbers prefix as free in the tariff section</Typography>
          <Typography sx={textStyle} color="text.primary">
            5. Bill your customers anywhere from $5 to $10 a month per number. When a new user signs
            up from your website an account will be created with one of the US numbers as the user’s
            login automatically. The newly created client can register to voipswitch from a VoIP
            device or a mobile softphone. Incoming calls to the US phone number will trigger a standard ringing tone.
          </Typography>

          <Typography sx={textStyle} color="text.primary">
            For more details please check this{" "}
            <Link
              href="https://www.youtube.com/watch?v=iew-LVDVbLs"
              target="_blank"
              rel="noopener"
              sx={{ color: "primary.main", fontWeight: "600" }}
            >
              video
            </Link>
            :
          </Typography>

          <Typography sx={textStyle} color="text.primary">
            For any further support, please contact:
          </Typography>

          <Typography sx={textStyle} color="text.primary">
            Krzysztof Oglaza Tel: +4-860-031-6058 <br />
            YahooID: koglaza <br />
            Email: chris@voipswitch.com
          </Typography>
        </Box>
      </Container>
      <Contact />
    </>
  );
}
