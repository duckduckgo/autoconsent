import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_dietdoctor.com_klo', ['https://www.dietdoctor.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
