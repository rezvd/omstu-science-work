const defaultTextStyles = {
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  color: '#262626',
  whiteSpace: 'normal' as const,
};

export const typography = {
  h1: {
    ...defaultTextStyles,
    fontWeight: 700,
    fontSize: '48px',
    marginBottom: '26px',
  },
  h2: {
    ...defaultTextStyles,
    fontWeight: 700,
    fontSize: '36px',
    marginBottom: '18px',
  },
  h3: {
    ...defaultTextStyles,
    fontWeight: 700,
    fontSize: '32px',
  },
  h4: {
    ...defaultTextStyles,
    fontWeight: 700,
    fontSize: '24px',
  },
  h5: {
    ...defaultTextStyles,
    fontWeight: 700,
    fontSize: '16px',
  },
  text: {
    ...defaultTextStyles,
    fontWeight: 400,
    fontSize: '24px',
  },
  smallText: {
    ...defaultTextStyles,
    fontWeight: 400,
    fontSize: '16px',
  },
};
