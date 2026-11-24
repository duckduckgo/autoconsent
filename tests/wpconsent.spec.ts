import generateCMPTests from '../playwright/runner';

generateCMPTests('WPConsent', ['https://www.allthebestfights.com/', 'https://usatourist.com/', 'https://ekaaduurzaam.nl/'], {
    testSelfTest: false,
});
