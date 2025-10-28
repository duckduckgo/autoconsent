import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_apfelpatient.de_8nr', ['https://www.apfelpatient.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
