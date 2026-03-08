import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_boutique.rossi-fer.com_w7o', ['https://boutique.rossi-fer.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
