import React, { useState, useEffect } from 'react';
import {
  Stack, Avatar, Typography, useTheme, Theme,
} from '@mui/material';
import designIcon from '../resources/logo.png';
import codeIcon from '../resources/codeIcon.png';
import { logoPrimaryColor } from '../style/theme';
import { services, ServiceType } from './helper';

interface ServiceCardProps {
  service: string;
}

const cardHeadingStyle = (theme: Theme, breakpoints: any) => ({
  ...theme.typography.body1,
  fontFamily: 'Roboto',
  [breakpoints.up('md')]: {
    ...theme.typography.h6,
    fontWeight: '500',
  },
});

const cardTextStyle = (theme: Theme, breakpoints: any) => ({
  ...theme.typography.body2,
  fontFamily: 'Roboto',
  fontSize: '0.75rem',
  [breakpoints.up('md')]: {
    ...theme.typography.body2,
    textAlign: 'center',
  },
});

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [data, setData] = useState<ServiceType | null>(null);
  const { breakpoints } = useTheme();

  useEffect(() => {
    if (service === 'Designer') {
      setData(services[0]);
    } else {
      setData(services[1]);
    }
  }, []);

  return (
    <Stack
      data-aos="fade-up"
      data-aos-delay="500"
      sx={{
        maxWidth: '200px',
        backgroundColor: 'white',
        padding: '0.5rem',
        borderRadius: '10px',
        borderColor: 'text.primary',
        borderWidth: '1px',
        [breakpoints.up('md')]: {
          maxWidth: '345px',
          padding: '1rem',
        },
      }}
      alignItems="center"
      gap={{ md: 5, sm: 3, xs: 2 }}
    >
      <Avatar
        srcSet={service === 'Designer' ? designIcon : codeIcon}
        variant="square"
        sx={{
          width: 40,
          height: 35,
          [breakpoints.up('md')]: {
            width: 65,
            height: 60,
          },
        }}
      />

      <Stack alignItems="center">
        <Typography
          sx={(theme) => ({ ...cardHeadingStyle(theme, breakpoints) })}
        >
          {service}
        </Typography>

        <Typography sx={(theme) => ({ ...cardTextStyle(theme, breakpoints) })}>
          {data?.detail}
        </Typography>
      </Stack>

      <Stack alignItems="center">
        <Typography
          sx={(theme) => ({
            ...cardHeadingStyle(theme, breakpoints),
            color: logoPrimaryColor,
          })}
        >
          {service === 'Designer' ? 'We Design' : 'We Code'}
        </Typography>

        <Typography sx={(theme) => ({ ...cardTextStyle(theme, breakpoints) })}>
          {data?.skillSet}
        </Typography>
      </Stack>

      <Stack alignItems="center">
        <Typography
          sx={(theme) => ({
            ...cardHeadingStyle(theme, breakpoints),
            color: logoPrimaryColor,
          })}
        >
          {service === 'Designer' ? 'Design Tools' : 'Dev Tools'}
        </Typography>
        <Typography sx={(theme) => ({ ...cardTextStyle(theme, breakpoints) })}>
          <ul>
            {data?.tools.map((tool) => (
              <li>{tool}</li>
            ))}
          </ul>
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ServiceCard;