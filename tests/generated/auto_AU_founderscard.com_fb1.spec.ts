import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_founderscard.com_fb1', ['https://founderscard.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
