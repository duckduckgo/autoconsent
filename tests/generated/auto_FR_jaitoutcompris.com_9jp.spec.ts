import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_jaitoutcompris.com_9jp', ['https://www.jaitoutcompris.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
