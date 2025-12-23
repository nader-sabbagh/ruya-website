
import React from 'react';

export type Theme = 'light' | 'dark';

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface RegionItem {
  name: string;
  code: string;
}

export interface WhyItem {
  label: string;
  subLabel: string;
  icon: React.ReactNode;
}