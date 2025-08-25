import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_proximite.mgen.fr_9sn', ['https://proximite.mgen.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
