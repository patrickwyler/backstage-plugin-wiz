import React from 'react';
import { Chip } from '@mui/material';

const severityStyles: Record<
  string,
  { label: string; style: React.CSSProperties }
> = {
  CRITICAL: {
    label: 'Critical',
    style: {
      backgroundColor: 'hsl(360deg 100% 96.8%)',
      color: 'hsl(358deg 65% 47%)',
      border: '1px solid hsl(359deg 74.2% 81.7%)',
    },
  },
  HIGH: {
    label: 'High',
    style: {
      backgroundColor: 'hsl(34deg 100% 91.7%)',
      color: 'hsl(16deg 45% 41.5%)',
      border: '1px solid hsl(21deg 100% 74.5%)',
    },
  },
  MEDIUM: {
    label: 'Medium',
    style: {
      backgroundColor: 'hsl(53deg 100% 88.9%)',
      color: 'hsl(42deg 50% 31%)',
      border: '1px solid hsl(48deg 59.6% 64.3%)',
    },
  },
  LOW: {
    label: 'Low',
    style: {
      backgroundColor: 'hsl(239deg 13.4% 95.4%)',
      color: 'hsl(220deg 6% 40%)',
      border: '1px solid hsl(234deg 10.4% 84.4%)',
    },
  },
  NONE: {
    label: 'None',
    style: {
      backgroundColor: 'hsl(239deg 13.4% 95.4%)',
      color: 'hsl(220deg 6% 40%)',
      border: '1px solid hsl(234deg 10.4% 84.4%)',
    },
  },
  INFORMATIONAL: {
    label: 'Info',
    style: {
      backgroundColor: 'hsl(239deg 13.4% 95.4%)',
      color: 'hsl(220deg 6% 40%)',
      border: '1px solid hsl(234deg 10.4% 84.4%)',
    },
  },
};

export const SeverityChip = ({ severity }: { severity: string }) => {
  const defaultStyle = severityStyles.LOW;
  const selectedStyle = severityStyles[severity?.toUpperCase()] || defaultStyle;

  return (
    <Chip
      label={selectedStyle.label}
      size="small"
      style={{
        ...selectedStyle.style,
        borderRadius: '16px',
        fontWeight: 500,
        fontSize: '12px',
        padding: '4px 8px',
      }}
    />
  );
};
