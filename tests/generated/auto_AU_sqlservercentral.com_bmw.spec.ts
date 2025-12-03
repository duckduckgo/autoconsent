import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_sqlservercentral.com_bmw', ['https://www.sqlservercentral.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
