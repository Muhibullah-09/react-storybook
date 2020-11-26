import React from 'react';
import Button from './Button';

export default {
    title: 'form/Button',
    component: Button
}

export const Primary = () => < Button variant = 'primary'> Primary </Button>
export const Secondary = () => < Button variant = 'secondary'> Secondary </Button>
export const Success = () => < Button variant = 'success'> Success </Button>
export const Danger = () => < Button variant = 'danger'> Danger </Button>

// Small.storyName = 'Small Input'Not support in v6