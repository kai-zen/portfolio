import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import {
  Button,
  MobileStepper,
  Paper,
  Skeleton,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import SwipeableViews from 'react-swipeable-views';

const PWA = () => {
  const [loading, setLoading] = useState(true);

  const images = [
    {
      label: '0. Web app first page',
      imgPath: '/images/pwa.png',
    },
    {
      label: '1. Select or add address page',
      imgPath: '/images/pwa2.png',
    },
    {
      label: '2. Select waste list page',
      imgPath: '/images/pwa3.png',
    },
    {
      label: '3. Select data and time to deliver',
      imgPath: '/images/pwa4.png',
    },
    {
      label: '4. Submit selected picking request data',
      imgPath: '/images/pwa5.png',
    },
  ];

  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = 5;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 80,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography variant="h6">{images[activeStep].label}</Typography>
      </Paper>
      {loading ? (
        <Skeleton
          animation="wave"
          variant="rectangle"
          width="100%"
          height="550px"
        />
      ) : (
        <SwipeableViews
          axis="x"
          index={activeStep}
          onChangeIndex={(step) => {
            setActiveStep(step);
          }}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    display: 'block',
                    overflow: 'hidden',
                    width: '100%',
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </SwipeableViews>
      )}

      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={() => {
              setActiveStep(activeStep + 1);
            }}
            disabled={activeStep === 4}
          >
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={() => {
              setActiveStep(activeStep - 1);
            }}
            disabled={activeStep === 0}
          >
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
    </Box>
  );
};

export default PWA;
