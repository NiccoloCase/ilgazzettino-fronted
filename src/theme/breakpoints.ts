export const BREAKPOINTS = {
  xs: 0, // X-Small: None <576px
  sm: 576, // Small: ≥576px
  md: 768, // Medium: ≥768px
  lg: 992, // Large: ≥992px
  xl: 1200, // Extra large: ≥1200px
  xxl: 1400, // Extra extra large: ≥1400px
};

export const getBreakpoint = () => {
  const width = window.innerWidth;
  for (const [key, value] of Object.entries(BREAKPOINTS)) {
    if (width >= value) {
      return key;
    }
  }
  return "xl";
};
