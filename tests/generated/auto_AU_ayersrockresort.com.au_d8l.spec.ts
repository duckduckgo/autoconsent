import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_ayersrockresort.com.au_d8l', ['https://www.ayersrockresort.com.au/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
