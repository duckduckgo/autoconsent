import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_askonasholt.com_go4', ['https://askonasholt.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
