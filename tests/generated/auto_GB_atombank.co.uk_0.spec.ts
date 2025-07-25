import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_atombank.co.uk_0', ['https://www.atombank.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
