import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_latelierdutrain.com_upb', ['https://www.latelierdutrain.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
