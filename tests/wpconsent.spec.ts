import generateCMPTests from '../playwright/runner';

generateCMPTests('WPConsent', ['https://www.allthebestfights.com/', 'https://usatourist.com/'], {
    testSelfTest: false,
});
