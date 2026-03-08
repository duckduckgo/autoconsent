import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_docs.kentico.com_u0l', ['https://docs.kentico.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
