import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_dietdoctor.com_q9w', ['https://www.dietdoctor.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
