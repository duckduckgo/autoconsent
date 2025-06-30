import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_codeweavers.com_ll2', ['https://www.codeweavers.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
