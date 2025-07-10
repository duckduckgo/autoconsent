import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_e-greenelectrical.com.au_46f', ['https://e-greenelectrical.com.au/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
