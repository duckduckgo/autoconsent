import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_mathsonline.com.au_cws', ['https://www.mathsonline.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
