import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_guide-du-perigord.com_af2', ['https://www.guide-du-perigord.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
