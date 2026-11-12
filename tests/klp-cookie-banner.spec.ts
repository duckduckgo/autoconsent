import generateCMPTests from '../playwright/runner';

const urls = ['https://www.klp.no/', 'https://www.klpeiendom.no/', 'https://www.klpfastigheter.se/', 'https://www.klpejendomme.dk/'];

generateCMPTests('klp-cookie-banner', urls);
