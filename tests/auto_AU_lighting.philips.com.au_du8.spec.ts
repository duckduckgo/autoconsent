import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_lighting.philips.com.au_du8', ['https://www.lighting.philips.com.au/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
