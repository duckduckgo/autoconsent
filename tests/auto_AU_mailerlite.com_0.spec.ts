import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_mailerlite.com_0', ['https://www.mailerlite.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
