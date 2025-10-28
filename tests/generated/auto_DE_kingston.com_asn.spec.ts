import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kingston.com_asn', ['https://www.kingston.com/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
