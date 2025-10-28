import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_bigwhite.com_mut', ['https://www.bigwhite.com/geo/on'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
