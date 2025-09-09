import React, { useEffect, useRef, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// --- Theme Configuration ---
let theme = createTheme({
  palette: {
    primary: {
      main: '#D6006E', // A vibrant pink/magenta from the CTA
    },
    secondary: {
      main: '#6a1b9a', // A deep purple from the CTA
    },
    text: {
      primary: '#333333',
      secondary: '#555555',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F8F8F8', // A very light grey for alternating sections
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h2: {
      fontWeight: 600,
      fontSize: '2.8rem',
      lineHeight: 1.2,
      marginBottom: '1rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2.2rem',
      lineHeight: 1.3,
      marginBottom: '1rem',
    },
    h4: {
        fontWeight: 600,
        fontSize: '1.5rem',
        marginBottom: '1rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          textTransform: 'none',
          fontWeight: 600,
          padding: '10px 24px',
          boxShadow: 'none',
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
          },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

// --- Styled Components ---
const Section = styled(Box)(({ theme, alternate }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: alternate ? theme.palette.background.paper : theme.palette.background.default,
  overflow: 'hidden', // Ensures animations don't cause scrollbars
}));

const ImageContainer = styled(Box)({
  width: '100%',
  height: '100%',
  minHeight: '300px',
  borderRadius: '8px',
  overflow: 'hidden',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});

const CtaSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 2),
  background: 'linear-gradient(90deg, #6a0dad, #d6006e)',
  color: 'white',
  textAlign: 'center',
}));

const StatsSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 2),
  backgroundColor: '#212121',
  color: 'white',
  textAlign: 'center',
}));

const StatItem = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(6),
    '&:last-child': {
      marginBottom: 0,
    }
  },
}));

// --- Dummy Data ---
const contentSections = [
  {
    title: 'Distinguished Technologists Program',
    description: 'We modernize IT infrastructure with Insight’s Distinguished Technologists Program, a service focused on cloud adoption, AI integration, and IT cost management to empower innovation and streamline your operations, helping you thrive in today’s technology landscape.',
    imageUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2073&auto=format&fit=crop',
    imagePosition: 'left',
  },
  {
    title: 'Corporate social responsibility',
    description: 'Our commitment to community and philanthropy is at the heart of what we do every day at Insight. We belove in making a positive impact, which is why we support the communities we operate and live in across the globe.',
    imageUrl: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop',
    imagePosition: 'right',
  },
  {
    title: 'Insight in the news & communities',
    description: 'Being on the cutting edge of technology also means being ahead of the conversation on topics that truly matter to business. Get the latest tech news, expert perspectives — plus, press releases, media center contacts and organizational announcements.',
    specialLink: 'Want to meet with us? Check out our upcoming technology events.',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop',
    imagePosition: 'left',
  },
  {
    title: 'Investor Relations',
    description: 'As a publicly traded company, we provide helpful tools and resources for investors. From stock charts to our latest subdirectory, you\'ll find financial reports, dividend history, SEC filings and much more right here, all designed to make your investment journey easier.',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
    imagePosition: 'right',
  },
  {
    title: 'One global team',
    description: 'We\'re always looking for top talent to join our growing team of dedicated professionals. Find our current job openings, read about our values and our commitment to diversity, and find out more, as well as information about the benefits we offer employees.',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
    imagePosition: 'right', // This will be rendered separately but uses the same structure.
  },
];


// --- The Main Component ---
function InsightCorporatePage() {
  const mainRef = useRef(null);
  const [scriptsLoaded, setScriptsLoaded] = useState(false);

  // Effect to dynamically load GSAP and ScrollTrigger scripts
  useEffect(() => {
    const gsapScriptId = 'gsap-script';
    const scrollTriggerScriptId = 'scrolltrigger-script';

    // Prevent adding scripts if they already exist from a previous render
    if (document.getElementById(gsapScriptId) && document.getElementById(scrollTriggerScriptId)) {
      if (!scriptsLoaded) setScriptsLoaded(true);
      return;
    }

    const gsapScript = document.createElement('script');
    gsapScript.id = gsapScriptId;
    gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
    gsapScript.async = true;
    document.body.appendChild(gsapScript);

    gsapScript.onload = () => {
      const scrollTriggerScript = document.createElement('script');
      scrollTriggerScript.id = scrollTriggerScriptId;
      scrollTriggerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js';
      scrollTriggerScript.async = true;
      document.body.appendChild(scrollTriggerScript);
      
      scrollTriggerScript.onload = () => {
        setScriptsLoaded(true);
      };
    };
    
    // Basic cleanup for when the component unmounts
    return () => {
      const gs = document.getElementById(gsapScriptId);
      const st = document.getElementById(scrollTriggerScriptId);
      if (gs) gs.remove();
      if (st) st.remove();
    };
  }, [scriptsLoaded]);

  // GSAP animation setup effect
  useEffect(() => {
    // Wait until scripts are loaded
    if (!scriptsLoaded) return;

    // We can now safely use window.gsap
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('.animated-section');
      sections.forEach((section) => {
        gsap.from(section, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });
    }, mainRef);

    // Cleanup function
    return () => ctx.revert();
  }, [scriptsLoaded]); // Rerun this effect when scripts are loaded


  return (
    <Box ref={mainRef}>
      {/* --- Dynamic Content Sections --- */}
      {contentSections.slice(0, 4).map((section, index) => (
        <Section key={index} alternate={index % 2 !== 0} className="animated-section">
          <Container maxWidth="lg">
            <Grid container spacing={6} alignItems="center" direction={section.imagePosition === 'left' ? 'row' : 'row-reverse'}>
              <Grid item xs={12} md={6}>
                <ImageContainer>
                  <img src={section.imageUrl} alt={section.title} />
                </ImageContainer>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box>
                  <Typography variant="h3">{section.title}</Typography>
                  <Typography variant="body1" sx={{ my: 3 }}>
                    {section.description}
                  </Typography>
                  {section.specialLink && (
                     <Typography variant="body1" sx={{ my: 3, fontWeight: '500' }}>
                        {section.specialLink}
                     </Typography>
                  )}
                  <Button variant="outlined" color="primary" size="large">
                    Learn More
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Section>
      ))}

      {/* --- Call to Action Section --- */}
      <CtaSection className="animated-section">
        <Container maxWidth="md">
          <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
            We serve the public and private sectors.
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, maxWidth: '750px', mx: 'auto' }}>
            Whether you’re a business, government agency or school, intelligent technology solutions are essential to improving your productivity and efficiency. We are a trusted partner to public sector clients and can help your organization — from initial strategy to ongoing maintenance.
          </Typography>
          <Box>
            <Button variant="contained" color="inherit" size="large" sx={{ mr: { sm: 2 }, mb: { xs: 2, sm: 0 }, color: 'primary.main' }}>
              Explore Business Solutions
            </Button>
            <Button variant="outlined" color="inherit" size="large">
              Explore Public Sector Solutions
            </Button>
          </Box>
        </Container>
      </CtaSection>

      {/* --- Final "One Global Team" Section --- */}
      {(() => {
        const lastSection = contentSections[4];
        return (
          <Section alternate={true} className="animated-section">
            <Container maxWidth="lg">
                {/* Note: In the screenshot this section had text-left, image-right. Let's force that. */}
              <Grid container spacing={6} alignItems="center" direction="row-reverse"> 
                <Grid item xs={12} md={6}>
                  <ImageContainer>
                    <img src={lastSection.imageUrl} alt={lastSection.title} />
                  </ImageContainer>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box>
                    <Typography variant="h3">{lastSection.title}</Typography>
                    <Typography variant="body1" sx={{ my: 3 }}>
                      {lastSection.description}
                    </Typography>
                    <Button variant="outlined" color="primary" size="large">
                      Learn More
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Section>
        );
      })()}


      {/* --- Statistics Section --- */}
      <StatsSection className="animated-section">
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ mb: 8 }}>
            Insight by the numbers
          </Typography>
          <Grid container>
            <Grid item xs={12} md={4}>
              <StatItem>
                <Typography sx={{ fontSize: '4.5rem', fontWeight: 700, color: 'primary.main' }}>14,000+</Typography>
                <Typography variant="h6" component="p">Insight teammates worldwide</Typography>
              </StatItem>
            </Grid>
            <Grid item xs={12} md={4}>
              <StatItem>
                <Typography sx={{ fontSize: '4.5rem', fontWeight: 700, color: 'primary.main' }}>6,400+</Typography>
                <Typography variant="h6" component="p">Hard-and-software-certified consulting and service delivery professionals</Typography>
              </StatItem>
            </Grid>
            <Grid item xs={12} md={4}>
              <StatItem>
                <Typography sx={{ fontSize: '4.5rem', fontWeight: 700, color: 'primary.main' }}>No. 427</Typography>
                <Typography variant="h6" component="p">Fortune 500</Typography>
              </StatItem>
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" size="large" sx={{ mt: 8 }}>
            How can we help you?
          </Button>
        </Container>
      </StatsSection>
    </Box>
  );
}


export default function InfoCardSection() {
  return (
    <ThemeProvider theme={theme}>
      <InsightCorporatePage />
    </ThemeProvider>
  );
}

