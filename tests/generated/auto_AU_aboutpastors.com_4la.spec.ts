import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_aboutpastors.com_4la', ['https://aboutpastors.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
