import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'wpconsent',
    [
        'https://cupertinolens.com/',
        'https://usatourist.com/',
        'https://saltmoney.org/',
        'https://www.volpifoods.com/',
        'https://cardamomandtea.com/',
    ],
    {},
);
