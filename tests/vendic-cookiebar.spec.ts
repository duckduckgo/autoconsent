import generateCMPTests from '../playwright/runner';

generateCMPTests('vendic-cookiebar', [
    'https://www.shogun.nl/',
    'https://www.online-lampen-winkel.nl/',
    'https://www.verlichtingspecialist.nl/',
    'https://www.degrootwonen.nl/',
]);
