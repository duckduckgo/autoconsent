import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_chantalparentherboriste.com_zp5', ['https://chantalparentherboriste.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
