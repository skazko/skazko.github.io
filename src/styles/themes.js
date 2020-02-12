const sizes = {
  medium: '950px',
  small: '640px'
};

export const screens = {
  medium: `screen and (max-width: ${sizes.medium})`,
  small: `screen and (max-width: ${sizes.small})`,  
};

export const themes = {
  light: {
    ...screens,
    textColor: '#222222',
    bgColor: '#fbfbfb',
    accentColor: '#cd2653',
    popupBgColor: 'rgb(251, 251, 251, 0.7)',
    inverseColor: '#fbfbfb',
    inverseBg: '#222222',
    inverseTheme: 'dark',
  },
  dark: {
    ...screens,
    textColor: '#fbfbfb',
    bgColor: '#222222',
    accentColor: '#cd2653',
    popupBgColor: 'rgb(34, 34, 34, 0.75)',
    inverseColor: '#222222',
    inverseBg: '#fbfbfb',
    inverseTheme: 'light',
  },
};
