import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import ReceiptIcon from '@mui/icons-material/Receipt';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import SummarizeIcon from '@mui/icons-material/Summarize';
import SecurityIcon from '@mui/icons-material/Security';

function Audit() {
  const [counters, setCounters] = useState({});

  const cardData = [
    {
      title: "ETC",
      description: "",
      color: "#ffcccb",
      icon: <FormatAlignLeftIcon />,
      fetchData: () => fetch('/api/etc') // Replace with your API endpoint
    },
    {
      title: "Audit",
      description: "",
      color: "#ccffcc",
      icon: <ContentPasteIcon />,
      fetchData: () => fetch('/api/audit') // Replace with your API endpoint
    },
    {
      title: "Transaction",
      description: "",
      color: "#add8e6",
      icon: <ReceiptIcon />,
      fetchData: () => fetch('/api/transaction') // Replace with your API endpoint
    },
    {
      title: "Report",
      description: "",
      color: "#ffffcc",
      icon: <NoteAltIcon />,
      fetchData: () => fetch('/api/report') // Replace with your API endpoint
    },
    {
      title: "Compliance",
      description: "",
      color: "#ffebcd",
      icon: <SummarizeIcon />,
      fetchData: () => fetch('/api/compliance') // Replace with your API endpoint
    },
    {
      title: "Security",
      description: "",
      color: "#e6e6fa",
      icon: <SecurityIcon />,
      fetchData: () => fetch('/api/security') // Replace with your API endpoint
    }
  ];

  useEffect(() => {
    cardData.forEach((card) => {
      card.fetchData()
        .then(response => response.json())
        .then(data => {
          setCounters(prevCounters => ({
            ...prevCounters,
            [card.title]: data.count // Assume the response has a 'count' field
          }));
        })
        .catch(error => console.error('Error fetching data:', error));
    });
  }, []);

  return (
    <div>
      <Box sx={{ flexGrow: 1, p: 8 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {cardData.map((card, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Card sx={{
                maxWidth: 345,
                bgcolor: card.color,
                boxShadow: 3,
                borderRadius: 2,
                '&:hover': {
                  cursor: 'pointer',
                  boxShadow: 6,
                  transform: 'scale(1.05)',
                  transition: 'transform 0.3s ease-in-out',
                }
              }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box sx={{ mr: 2 }}>
                      {card.icon}
                    </Box>
                    <Typography gutterBottom variant="h5" component="div">
                      {card.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                  <Typography variant="h6" color="text.primary">
                    Count: {counters[card.title] || 'Loading...'}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Audit;