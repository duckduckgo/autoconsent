import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_medicalone.com.au_90s', ['https://www.medicalone.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
