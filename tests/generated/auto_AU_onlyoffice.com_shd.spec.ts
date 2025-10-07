import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_onlyoffice.com_shd', ['https://www.onlyoffice.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
