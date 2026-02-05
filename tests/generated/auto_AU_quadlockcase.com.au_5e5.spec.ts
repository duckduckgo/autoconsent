import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_quadlockcase.com.au_5e5', ['https://www.quadlockcase.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
