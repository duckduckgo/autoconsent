import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_orchestremetropolitain.com_cp4', ['https://orchestremetropolitain.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
