import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_blushlingerie.com_izs', ['https://blushlingerie.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
