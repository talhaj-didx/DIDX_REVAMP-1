import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function MultiActionAreaCard({ title, children, img, style = {} }) {
  return (
    <Card
      sx={{
        ...style,
        justifyContent: "center",
        alignItems: 'center',
        justifySelf: 'center',
        maxWidth: '80%',
        borderRadius: 4, // smoother corners
        boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.3)', // soft shadow
        // transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        // '&:hover': {
        //   transform: 'translateY(-6px)', // lift effect
        //   boxShadow: '0px 12px 28px rgba(0, 0, 0, 0.2)',
        // },
      }}
      elevation={1}
    >
      <CardActionArea disableRipple disableTouchRipple sx={{ borderRadius: 4 }}>
        <CardMedia
          component="img"
          image={img}
          alt="about us"
          sx={{
            width: "100%",
            maxHeight: 400,
            objectFit: "cover", // looks better than "fill"
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
          }}
        />
        <CardContent sx={{ px: 3, py: 2 }}>
          <Typography
            variant="h3"
            component="h3"
            sx={{ fontWeight: "bold", mt: 6, mb: 3, color: "text.secondary" }}
          >
            {title}
          </Typography>
          {children}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
