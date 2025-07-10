import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_dailywire.com_8ky', ['https://www.dailywire.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
