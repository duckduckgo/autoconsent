import generateCMPTests from '../playwright/runner';

generateCMPTests('bw-cookie-banner', ['https://wwws.airfrance.fr/', 'https://wwws.airfrance.us/', 'https://www.klm.com/']);
