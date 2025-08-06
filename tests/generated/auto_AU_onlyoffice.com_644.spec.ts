import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_onlyoffice.com_644', ['https://www.onlyoffice.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
