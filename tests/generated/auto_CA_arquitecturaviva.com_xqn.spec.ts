import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_arquitecturaviva.com_xqn', ['https://arquitecturaviva.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
