import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_brightonfestival.org_1du', ['https://brightonfestival.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
