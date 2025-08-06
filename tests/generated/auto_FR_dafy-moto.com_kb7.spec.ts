import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_dafy-moto.com_kb7', ['https://www.dafy-moto.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
