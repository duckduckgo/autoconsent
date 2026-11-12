import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'radio-canada',
    [
        'https://ici.radio-canada.ca/',
        'https://ici.radio-canada.ca/info',
        'https://ici.radio-canada.ca/ohdio',
        'https://ici.artv.ca/',
        'https://ici.exploratv.ca/',
    ],
    {
        testSelfTest: false,
    },
);
