import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_help.brother-usa.com_svh', ['https://help.brother-usa.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
