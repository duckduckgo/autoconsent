import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_thermador.com_aoo', ['https://www.thermador.com/us/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
