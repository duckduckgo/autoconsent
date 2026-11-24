import generateCMPTests from '../playwright/runner';

generateCMPTests('sitecore-privacy-warning', [
    'https://vietcombank.com.vn/',
    'https://www.fraserhealth.ca/',
    'https://www.sheridancollege.ca/',
    'https://www.gallagher.com/',
    'https://usd.edu/',
]);
