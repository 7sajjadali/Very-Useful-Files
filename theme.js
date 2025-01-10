// export const MOB={Backend:`http://192.168.219.254:3001/node/`};
// export const MOB={Backend:`http://10.0.2.2:3001/node/`};
export const MOB = {Backend: 'http://skmatrimonial.com/node/'};

const ROW = {
  display: 'flex',
  flexDirection: 'row', // This sets the flex direction to row
  justifyContent: 'start', // Optional: Adjust as needed
  alignItems: 'center', // Optional: Adjust as needed
};
const Center = {
  display: 'block',
  justifyContent: 'center', // Optional: Adjust as needed
  alignItems: 'center', // Optional: Adjust as needed
};
const Centerflex = {
  display: 'flex',
  justifyContent: 'center', // Optional: Adjust as needed
  alignItems: 'center', // Optional: Adjust as needed
};

const COLORS = {
  WHITE: '#FFFFFF',
  BLACK: '#000000',
  GREY: '#898989',
  THEME: '#B23AFC',
  PRIMARY: '#1f1f1f',
  INFO: '#1232FF',
  ERROR: '#FE2472',
  WARNING: '#FF9C09',
  SUCCESS: '#45DF31',
  TRANSPARENT: 'transparent',
  INPUT: '#808080',
  PLACEHOLDER: '#9FA5AA',
  NAVBAR: '#F9F9F9',
  BLOCK: '#808080',
  MUTED: '#9FA5AA',
  NEUTRAL: 'rgba(255,255,255, 0.65)',
  FACEBOOK: '#3B5998',
  TWITTER: '#5BC0DE',
  DRIBBBLE: '#EA4C89',
  ICON: '#000000',
};

const LINK = {
  fontSize: 16,
};
const NavLink = {
  fontSize: 10,
  width: '100%',
  backgroundColor: 'limegreen',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textalign: 'center',
  paddingTop: 10,
  marginLeft: 10,
  marginRight: 10,
  marginTop: 10,
  borderRadius: 25,
};
const NavButton = {
  fontSize: 10,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textalign: 'center',
  width: '100%',
  backgroundColor: 'limegreen',
  paddingTop: 10,

  marginLeft: 10,
  marginRight: 10,
  marginTop: 10,
  borderRadius: 25,
};

const FooterStyle = {
  fontSize: 14,
  backgroundColor: 'black',
  position: 'absolute',
  width: '100%',
  marginBottom: 0,
  paddingBottom: 0,
};
export default {
  Center,
  Centerflex,
  ROW,
  COLORS,
  NavLink,
  NavButton,
  LINK,
  FooterStyle,
  MOB,
};
