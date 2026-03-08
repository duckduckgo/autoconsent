import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_datareportal.com_n7a', ['https://datareportal.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
