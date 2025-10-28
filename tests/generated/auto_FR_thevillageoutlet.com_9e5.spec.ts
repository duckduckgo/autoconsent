import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_thevillageoutlet.com_9e5', ['https://thevillageoutlet.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
