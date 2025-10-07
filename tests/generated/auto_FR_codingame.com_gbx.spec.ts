import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_codingame.com_gbx', ['https://www.codingame.com/start/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
