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
    fontSize: '40px',
    marginBottom: '26px',
  },
  h2: {
    ...defaultTextStyles,
    fontWeight: 700,
    fontSize: '32px',
    marginBottom: '18px',
  },
  h3: {
    ...defaultTextStyles,
    fontWeight: 700,
    fontSize: '24px',
  },
  h4: {
    ...defaultTextStyles,
    fontWeight: 700,
    fontSize: '16px',
  },
  h5: {
    ...defaultTextStyles,
    fontWeight: 700,
    fontSize: '14px',
  },
  text: {
    ...defaultTextStyles,
    fontWeight: 400,
    fontSize: '18px',
  },
  smallText: {
    ...defaultTextStyles,
    fontWeight: 400,
    fontSize: '16px',
  },
};
