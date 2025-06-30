import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_drjoedispenza.com_2zq', ['https://drjoedispenza.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
