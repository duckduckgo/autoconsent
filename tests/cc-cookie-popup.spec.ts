import generateCMPTests from '../playwright/runner';

const urls = [
    'https://catflooringaccessories.com/product/fpb10x3/',
    'https://arvitec.com/',
    'https://www.matsdirect.co.za/',
    'https://www.coba.com/',
];

generateCMPTests('cc-cookie-popup', urls, { mobile: true });
generateCMPTests('cc-cookie-popup', urls, { mobile: false });
