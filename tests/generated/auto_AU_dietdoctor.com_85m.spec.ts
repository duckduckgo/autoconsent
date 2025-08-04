import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_dietdoctor.com_85m', ['https://www.dietdoctor.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
