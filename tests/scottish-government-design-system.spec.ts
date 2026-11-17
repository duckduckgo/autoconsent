import generateCMPTests from '../playwright/runner';

generateCMPTests('scottish-government-design-system', [
    'https://www.mygov.scot/',
    'https://www.gov.scot/',
    'https://www.socialsecurity.gov.scot/',
    'https://www.landlordregistrationscotland.gov.uk/',
]);
