import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_franceboisforet.fr_s1h', ['https://franceboisforet.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
