import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_klassetrivsel.no_mll', ['https://klassetrivsel.no/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
