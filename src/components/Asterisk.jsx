import {
    Box,
    Container,
    Typography,
    Link,
    Paper,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
} from "@mui/material";
import BreadCrumb from "./BreadCrumbs";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { Contact } from "./contact";


export const metadata = {
    title: "Asterisk Configuration | DIDX",
};

const headings = ["*IP Addresses", "*DNS"];

const values = [
    ["162.243.32.115", "sip4.didx.net"],
    ["142.93.9.107", "sip10.didx.net"],
    ["159.203.27.198", "ca.didx.net"],
    ["188.166.168.173", "eu2.didx.net"],
    ["46.101.80.13", "eu3.didx.net"],
    ["198.199.87.53", "us1.didx.net"],
    ["162.243.107.173", "us2.didx.net"],
];

export default function Asterisk() {
    const containerRef = useRef();
    

    const textStyle = {
        fontSize: { xs: "1.2rem", md: "1.5rem" },
        color: "text.secondary",
        lineHeight: 1.7,
        overflowWrap: "break-word",
    };

    useGSAP(() => {
        if (containerRef.current) {
            gsap.from(containerRef.current.children, {
                opacity: 0,
                y: 20,
                duration: 0.6,
                stagger: 0.2,
                ease: "power2.out",
            });
        }
    }, []);

    return (
        <>
            <BreadCrumb title={metadata.title} />
            <Box
                component="main"
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    px: { xs: 2, xl: 10, "2xl": 20 },
                    py: 8,
                }}
            >
                <Container maxWidth="lg" ref={containerRef}>
                    {/* Intro */}
                    <Typography sx={textStyle} color="text.primary" paragraph>
                        DIDX provides simple call forwarding Service, does not offer SIP or
                        IAX2 accounts (PEERS) to register on our network.
                    </Typography>
                    <Typography sx={textStyle} color="text.primary" paragraph>
                        Which means that you must allow DIDX to send you calls on your
                        asterisk server from our IP Addresses.
                    </Typography>

                    {/* Subheading */}
                    <Typography
                        variant="h5"
                        sx={{ fontWeight: "bold", mt: 6, mb: 2 }}
                        color="text.secondary"
                    >
                        Our IP Addresses:
                    </Typography>

                    {/* Table with updated theming */}
                    <Table sx={{ borderCollapse: "collapse", mb: 4, minWidth: "400px" }}>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: "#004080" }}>
                                {headings.map((head, idx) => (
                                    <TableCell
                                        key={idx}
                                        sx={{
                                            fontWeight: "bold",
                                            color: "#fff",
                                            borderRight: 1,
                                            borderColor: "divider",
                                            fontSize: "12px",
                                        }}
                                    >
                                        {head}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {values.map((row, rowIndex) => (
                                <TableRow
                                    key={rowIndex}
                                    sx={{
                                        backgroundColor: rowIndex % 2 === 0 ? "#e6f2ff" : "#ffffff",
                                        color: "#333",
                                    }}
                                >
                                    {row.map((val, colIndex) => (
                                        <TableCell
                                            key={colIndex}
                                            sx={{
                                                borderRight: 1,
                                                borderColor: "divider",
                                                fontSize: "12px",
                                                color: "#333",
                                            }}
                                        >
                                            {val}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                    <Typography sx={textStyle} color="text.primary" paragraph>
                        You should be able to receive calls from DIDX over SIP or IAX2
                    </Typography>
                    <Typography sx={textStyle} color="text.primary" paragraph>
                        Asterisk Sample Configurations
                    </Typography>

                    {/* Config Blocks */}
                    <Paper
                        variant="outlined"
                        sx={{
                            p: 2,
                            mb: 6,
                            bgcolor: "#222831",
                            color: "#ffffff",
                            fontFamily: "monospace",
                            whiteSpace: "pre-line",
                        }}
                    >
                        Sample sip.conf
                        {"\n"}Sample extensions.conf
                        {"\n"}Sample iax.conf
                    </Paper>

                    {/* More paragraphs */}
                    <Typography sx={textStyle} color="text.primary" paragraph>
                        SIP.Conf Sample File Location: /etc/asterisk/sip.conf
                    </Typography>
                    <Typography sx={textStyle} color="text.primary" paragraph>
                        Since the call is going to you over GENERAL Context, you will need
                        to add the following lines to make your asterisk work with DIDX
                        properly. Otherwise you will face errors and will think that DID is
                        not working.
                    </Typography>

                    <Paper
                        variant="outlined"
                        sx={{
                            p: 2,
                            mb: 6,
                            bgcolor: "#222831",
                            color: "#ffffff",
                            fontFamily: "monospace",
                            whiteSpace: "pre-line",
                        }}
                    >
                        [general]
                        {"\n"}context=default ; This is very important, as this is where the
                        call from DIDX will land to.
                        {"\n\n"}port=5060 ; The port where DIDX sends the call to
                        {"\n\n"}bindaddr=X.X.X.X ; Please bind to your main IP address
                        {"\n\n"}srvlookup=yes ; Enable DNS SRV lookups on outbound calls
                        {"\n\n"}dtmfmode=rfc2833
                        {"\n\n"}relaxdtmf=no
                        {"\n\n"}disallow=all
                        {"\n"}allow=ulaw
                        {"\n"}allow=alaw
                        {"\n\n"}allow=g729
                        {"\n"}allow=gsm
                        {"\n\n"}maxexpirey=30
                        {"\n"}defaultexpirey=180
                        {"\n"}canreinvite=yes
                        {"\n"}nat=0
                        {"\n"}UserAgent= Asterisk
                        {"\n"}echocancel=yes
                        {"\n"}echocancelwhenbridge=yes
                        {"\n\n"}[1000]
                        {"\n"}type=friend
                        {"\n"}username=12126559343
                    </Paper>

                    {/* IAX config */}
                    <Paper
                        variant="outlined"
                        sx={{
                            p: 2,
                            mb: 6,
                            bgcolor: "#222831",
                            color: "#ffffff",
                            fontFamily: "monospace",
                            whiteSpace: "pre-line",
                        }}
                    >
                        IAX.conf /etc/asterisk/iax.conf
                        {"\n\n"}[general]
                        {"\n"}bindport=4569
                        {"\n"}bindaddr=0.0.0.0 ; Your server ip address
                        {"\n"}jitterbuffer = yes
                        {"\n"}disallow=all
                        {"\n"}allow=alaw
                        {"\n"}allow=ulaw
                        {"\n"}dtmfmode = rfc2833
                        {"\n"}context=Default
                        {"\n"}asterisk@yourdomain.com/1111111111
                        {"\n\n"}allow=all
                        {"\n\n"}[guest]
                        {"\n"}Context=default
                        {"\n"}Disallow= all
                        {"\n"}Allow= ulaw
                        {"\n"}dtmfmode= rfc2833
                    </Paper>

                    {/* More config paragraphs */}
                    <Paper
                        variant="outlined"
                        sx={{
                            p: 2,
                            mb: 6,
                            bgcolor: "#222831",
                            color: "#ffffff",
                            fontFamily: "monospace",
                            whiteSpace: "pre-line",
                        }}
                    >
                        Extensions.conf /etc/asterisk/extensions.conf
                        {"\n\n"}Extensions.conf has to know where the call you are getting
                        from has to go to.
                    </Paper>

                    <Paper
                        variant="outlined"
                        sx={{
                            p: 2,
                            mb: 6,
                            bgcolor: "#222831",
                            color: "#ffffff",
                            fontFamily: "monospace",
                            whiteSpace: "pre-line",
                        }}
                    >
                        [didx]
                        {"\n"}exten = _X.,1,Dial(SIP/123456@fwd.pulver.com)
                        {"\n"}exten = _X.,2,Hangup
                    </Paper>

                    <Paper
                        variant="outlined"
                        sx={{
                            p: 2,
                            mb: 6,
                            bgcolor: "#222831",
                            color: "#ffffff",
                            fontFamily: "monospace",
                            whiteSpace: "pre-line",
                        }}
                    >
                        exten = radio,1,Answer
                        {"\n"}exten = radio,2,MP3Player(https://www.didx.net/jesus.mp3)
                    </Paper>

                    <Typography sx={textStyle} color="text.primary" paragraph>
                        Support
                        <br />
                        We recommend you to visit{" "}
                        <Link href="/about" color="primary" fontWeight={600}>
                            About us
                        </Link>
                        ,{" "}
                        <Link
                            href="https://voip-info.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            color="primary"
                            fontWeight={600}
                        >
                            VOIP information
                        </Link>
                    </Typography>

                    <Typography sx={textStyle} paragraph>
                        If you are still having problems, We suggest you contact an asterisk
                        consultant, or best would be to contact www.Digium.com
                    </Typography>
                </Container>
            </Box>
            <Contact  />
        </>
    );
}
