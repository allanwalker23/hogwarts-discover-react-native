import { LinearGradient } from 'expo-linear-gradient';
import React, { ReactNode } from 'react';
import { useTheme } from 'styled-components';
import theme from '../../global/styles/theme';

import {
  Container
} from './styles';

interface BackgroundProps {
    children: ReactNode;
}

export function Background({children}:BackgroundProps) {
  return (
    <LinearGradient
        colors={[theme.colors.primary, theme.colors.secondary]}
        style={{ flex: 1 }}
    >
        {children}
    </LinearGradient>
  );
}