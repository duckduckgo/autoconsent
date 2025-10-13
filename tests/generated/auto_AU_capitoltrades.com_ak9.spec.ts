import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_capitoltrades.com_ak9', ['https://www.capitoltrades.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
