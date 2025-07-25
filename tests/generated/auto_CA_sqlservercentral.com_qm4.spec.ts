import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_sqlservercentral.com_qm4', ['https://www.sqlservercentral.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
