import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_vucommodores.com_c45', ['https://vucommodores.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
