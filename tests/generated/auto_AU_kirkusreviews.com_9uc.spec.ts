import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_kirkusreviews.com_9uc', ['https://www.kirkusreviews.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
