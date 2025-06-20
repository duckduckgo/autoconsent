import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_philips.com.au_iim', ['https://www.philips.com.au/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
