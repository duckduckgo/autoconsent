import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_apprendre-larabe-facilement.com_2tv', ['https://apprendre-larabe-facilement.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
