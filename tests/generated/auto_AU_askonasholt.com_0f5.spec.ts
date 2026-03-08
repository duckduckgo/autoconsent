import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_askonasholt.com_0f5', ['https://askonasholt.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
