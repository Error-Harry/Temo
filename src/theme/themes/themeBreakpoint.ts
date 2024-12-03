interface Breakpoints {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

interface MediaQuery {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

const breakpoints: Breakpoints = {
  xs: "0px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1400px",
};

const mq: MediaQuery = {
  xs: `@media screen and (max-width: ${breakpoints.sm})`,
  sm: `@media screen and (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md})`,
  md: `@media screen and (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg})`,
  lg: `@media screen and (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl})`,
  xl: `@media screen and (min-width: ${breakpoints.xl}) and (max-width: ${breakpoints.xxl})`,
  xxl: `@media screen and (min-width: ${breakpoints.xxl})`,
};

export { breakpoints, mq };
