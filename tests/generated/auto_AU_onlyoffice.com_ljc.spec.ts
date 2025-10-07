import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_onlyoffice.com_ljc', ['https://www.onlyoffice.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
