import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_codingame.com_jmf', ['https://www.codingame.com/start/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
