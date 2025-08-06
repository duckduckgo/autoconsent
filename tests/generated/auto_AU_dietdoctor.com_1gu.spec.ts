import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_dietdoctor.com_1gu', ['https://www.dietdoctor.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
