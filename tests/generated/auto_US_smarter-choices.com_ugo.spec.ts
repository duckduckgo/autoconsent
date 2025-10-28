import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_smarter-choices.com_ugo', ['https://smarter-choices.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
