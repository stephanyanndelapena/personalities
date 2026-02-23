import { useState } from 'react';
import { studentInfo, personalitiesList } from './data';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  background: 'linear-gradient(135deg, #800020 0%, #a0002a 100%)',
  border: '2px solid #600018',
  padding: '12px',
  borderRadius: '50%',
  boxShadow: '0 4px 12px rgba(128, 0, 32, 0.3)',
  transform: expand ? 'rotate(180deg)' : 'rotate(0deg)',
  transition: theme.transitions.create(['transform'], {
    duration: theme.transitions.duration.standard,
  }),
}));


const styles = {
  pageWrapper: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, #ffb3c6 0%, #ce4064 25%, #9c213c 50%, #f12641 75%, #800020 100%)',
    backgroundAttachment: 'fixed',
    overflowY: 'auto',
    overflowX: 'hidden',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    gap: 3,
    minHeight: '100vh',
  },
  header: {
    padding: 3,
    borderRadius: 2,
    width: '100%',
    maxWidth: 600,
    '& .MuiCardHeader-title': {
      color: '#ffffff',
      fontSize: '36px',
      fontWeight: 800,
      letterSpacing: '5px',
      textAlign: 'center',
      textShadow: '3px 3px 6px rgba(0, 0, 0, 0.4)',
    },
  },
  studentCard: {
    borderRadius: 3,
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
    background: 'rgba(255, 255, 255, 0.95)',
    border: '3px solid #800020',
    maxWidth: 600,
    width: '100%',
    backdropFilter: 'blur(10px)',
  },
  studentContent: {

    textAlign: 'center',
    background: 'linear-gradient(to bottom, rgba(255, 240, 245, 0.9) 0%, rgba(255, 255, 255, 0.95) 100%)',
  },
  studentName: {
    color: '#800020',
    fontSize: '22px',
    fontWeight: 800,
    marginBottom: 1.5,
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
  studentInfo: {
    color: '#a0002a',
    fontSize: '16px',
    fontWeight: 600,
  },
  galleryCard: {
    borderRadius: 3,
    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.25)',
    background: 'rgba(255, 255, 255, 0.98)',
    border: '2px solid rgba(255, 255, 255, 0.5)',
    maxWidth: 600,
    width: '100%',
    overflow: 'hidden',
    backdropFilter: 'blur(10px)',
  },
  cardMedia: {
    objectFit: 'cover',
    bgcolor: '#800020',
    height: 350,
    width: '100%',
    borderBottom: '4px solid #800020',
  },
  cardContent: {
    padding: 3,
    background: 'linear-gradient(to bottom, rgba(255, 240, 245, 0.9) 0%, rgba(255, 255, 255, 0.95) 100%)',
  },
  artistName: {
    color: '#800020',
    textAlign: 'center',
    marginBottom: 1,
    fontSize: '32px',
    fontWeight: 800,
    textTransform: 'uppercase',
    letterSpacing: '3px',
    textShadow: '2px 2px 4px rgba(128, 0, 32, 0.1)',
  },
  artistCount: {
    color: '#a0002a',
    textAlign: 'center',
    fontSize: '18px',
    fontWeight: 600,
    marginBottom: 2,
  },
  expandSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 1,
    paddingTop: 1,
  },
  expandLabel: {
    color: '#800020',
    fontSize: '14px',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  buttonActions: {
    justifyContent: 'center',
    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.95) 0%, rgba(255, 240, 245, 0.9) 100%)',
    padding: 2.5,
    gap: 2,
    borderTop: '2px solid rgba(128, 0, 32, 0.2)',
  },
  button: {
    background: 'linear-gradient(135deg, #800020 0%, #a0002a 50%, #c9184a 100%)',
    color: '#ffffff',
    fontWeight: 700,
    textTransform: 'uppercase',
    borderRadius: '12px',
    padding: '12px 50px',
    fontSize: '16px',
    letterSpacing: '2px',
    boxShadow: '0 6px 16px rgba(128, 0, 32, 0.35)',
    border: '2px solid rgba(255, 255, 255, 0.2)',
  },
  collapseContent: {
    background: 'linear-gradient(to bottom, rgba(255, 245, 248, 0.95) 0%, rgba(255, 255, 255, 0.95) 100%)',
    padding: 3.5,
    borderTop: '2px solid rgba(128, 0, 32, 0.15)',
  },
  description: {
    color: '#2d2d2d',
    lineHeight: '32px',
    textAlign: 'justify',
    fontSize: '16px',
    fontWeight: 400,
  },
};

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const hasNext = index < personalitiesList.length - 1;

  const handleNextClick = () => {
    setIndex(hasNext ? index + 1 : 0);
    setExpanded(false);
  };

  const handleBackClick = () => {
    setIndex(index === 0 ? personalitiesList.length - 1 : index - 1);
    setExpanded(false);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const personality = personalitiesList[index];

  return (
    <Box sx={styles.pageWrapper}>
      <Container maxWidth="sm" sx={styles.container}>
        <CssBaseline />
        <CardHeader title="KPOP ARTISTS" sx={styles.header} />
        
        <Card variant="outlined" sx={styles.studentCard}>
          <CardContent sx={styles.studentContent}>
            <Typography variant="body1" sx={styles.studentName}>
              {studentInfo.name}
            </Typography>
            <Typography variant="body2" sx={styles.studentInfo}>
              {studentInfo.subject}
            </Typography>
            <Typography variant="body2" sx={styles.studentInfo}>
            {studentInfo.section}
            </Typography>
          </CardContent>
        </Card>

        <Card variant="outlined" sx={styles.galleryCard}>
          <CardMedia
            component="img"
            sx={styles.cardMedia}
            image={personality.url}
            alt={personality.alt}
          />

          <CardContent sx={styles.cardContent}>
            <Typography variant="h4" sx={styles.artistName}>
              {personality.name}
            </Typography>
            <Typography variant="h5" sx={styles.artistCount}>
              {index + 1} of {personalitiesList.length}
            </Typography>

            <Box sx={styles.expandSection}>
              <Typography variant="caption" sx={styles.expandLabel}>
                {expanded ? 'Read Less' : 'Read More'}
              </Typography>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon 
                  sx={{ 
                    fontSize: 36, 
                    color: '#ffffff',
                    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))',
                  }} 
                />
              </ExpandMore>
            </Box>
          </CardContent>

          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent sx={styles.collapseContent}>
              <Typography variant="body1" sx={styles.description}>
                {personality.description}
              </Typography>
            </CardContent>
          </Collapse>

          <CardActions sx={styles.buttonActions}>
            <Button variant="contained" onClick={handleBackClick} sx={styles.button}>
              Back
            </Button>
            <Button variant="contained" onClick={handleNextClick} sx={styles.button}>
              Next
            </Button>
          </CardActions>
        </Card>
      </Container>
    </Box>
  );
}