import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_scholars.latrobe.edu.au_li6', ['https://scholars.latrobe.edu.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
