import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_e-greenelectrical.com.au_vrr', ['https://e-greenelectrical.com.au/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
