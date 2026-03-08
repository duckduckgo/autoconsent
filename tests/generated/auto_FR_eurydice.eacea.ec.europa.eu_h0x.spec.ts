import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_eurydice.eacea.ec.europa.eu_h0x', ['https://eurydice.eacea.ec.europa.eu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
