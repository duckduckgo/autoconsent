import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_elements.envato.com_0', ['https://elements.envato.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
