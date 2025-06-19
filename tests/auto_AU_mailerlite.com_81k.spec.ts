import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_mailerlite.com_81k', ['https://www.mailerlite.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
