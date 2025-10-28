import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_mon-ent-occitanie.fr_2ss', ['https://www.mon-ent-occitanie.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
