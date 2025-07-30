import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_dietdoctor.com_919', ['https://www.dietdoctor.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
