import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_resizepixel.com_igz', ['https://www.resizepixel.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
