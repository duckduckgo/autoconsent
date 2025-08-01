import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_passion-radio.fr_zxw', ['https://www.passion-radio.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
