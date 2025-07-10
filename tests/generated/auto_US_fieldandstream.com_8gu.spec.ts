import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_fieldandstream.com_8gu', ['https://www.fieldandstream.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
