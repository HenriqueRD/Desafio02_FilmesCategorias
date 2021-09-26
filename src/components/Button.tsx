import { Icon } from './Icon';

import '../styles/button.scss';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string,
    icon: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family',
    select: boolean,
}

export function Button({ title, icon, select, ...rest }: ButtonProps) {
  return (
    <button type="button" className={select ? 'select' : ''} {...rest}>
        <Icon name={icon} color={select ? '#FAE800' : '#FBFBFB'} />
        <span>{title}</span>
    </button>
  );
}