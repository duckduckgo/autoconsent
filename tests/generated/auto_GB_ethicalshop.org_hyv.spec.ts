import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ethicalshop.org_hyv', ['https://ethicalshop.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
