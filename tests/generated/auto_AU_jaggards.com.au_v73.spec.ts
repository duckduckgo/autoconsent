import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_jaggards.com.au_v73', ['https://www.jaggards.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
