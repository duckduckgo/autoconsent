import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_apfelpatient.de_c6e', ['https://www.apfelpatient.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
