import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_dailycaller.com_22e', ['https://dailycaller.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
