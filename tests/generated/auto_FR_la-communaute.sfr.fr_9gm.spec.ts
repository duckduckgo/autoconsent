import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_la-communaute.sfr.fr_9gm', ['https://la-communaute.sfr.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
