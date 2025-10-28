import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_generositedelanature.com_1aj', ['https://www.generositedelanature.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
