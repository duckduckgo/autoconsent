import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_ultimateclassicrock.com_m0w', ['https://ultimateclassicrock.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
