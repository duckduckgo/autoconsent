import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_abfallwirtschaft-freiburg.de_opv', ['https://abfallwirtschaft-freiburg.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
