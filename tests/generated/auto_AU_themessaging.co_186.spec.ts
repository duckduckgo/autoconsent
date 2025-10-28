import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_themessaging.co_186', ['https://themessaging.co/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
