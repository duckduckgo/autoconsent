import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_anthonyconstant.co.uk_f4q', ['https://anthonyconstant.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
