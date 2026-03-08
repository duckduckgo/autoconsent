import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_escher-expo.com_de2', ['https://escher-expo.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
