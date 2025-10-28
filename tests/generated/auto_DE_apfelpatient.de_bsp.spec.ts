import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_apfelpatient.de_bsp', ['https://www.apfelpatient.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
