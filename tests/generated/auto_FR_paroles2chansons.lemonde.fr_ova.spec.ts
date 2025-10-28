import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_paroles2chansons.lemonde.fr_ova', ['https://paroles2chansons.lemonde.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
