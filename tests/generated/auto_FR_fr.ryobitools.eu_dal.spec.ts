import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.ryobitools.eu_dal', ['https://fr.ryobitools.eu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
