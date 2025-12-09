import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_emobility.energy_niq', ['https://www.emobility.energy/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
