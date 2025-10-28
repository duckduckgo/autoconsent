import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_astronomy.com_57v', ['https://www.astronomy.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
