import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'blogger-cookie-notice',
    ['http://petrusko.blogspot.com/', 'https://www.irasutoya.com/', 'https://www.surrenderat20.net/', 'https://forgetfulbc.blogspot.com/'],
    {
        onlyRegions: ['GB', 'DE', 'FR', 'SE'],
    },
);
