import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_unitedrugby.com_6q6', ['https://www.unitedrugby.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
