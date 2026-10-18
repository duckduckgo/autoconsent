import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'dfactory-cookie-notice',
    ['https://speedtest.dk/', 'https://io-tech.fi/', 'https://ubuntuhandbook.org/', 'https://www.business2community.com/'],
    {},
);
