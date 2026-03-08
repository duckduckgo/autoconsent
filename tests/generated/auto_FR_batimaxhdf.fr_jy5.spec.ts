import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_batimaxhdf.fr_jy5', ['https://frboischauffage.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
