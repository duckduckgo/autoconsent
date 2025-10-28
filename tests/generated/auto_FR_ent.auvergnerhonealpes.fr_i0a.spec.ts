import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ent.auvergnerhonealpes.fr_i0a', ['https://www.ent.auvergnerhonealpes.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
