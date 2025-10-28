import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_affinity.serif.com_7es', ['https://affinity.serif.com/en-us/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
