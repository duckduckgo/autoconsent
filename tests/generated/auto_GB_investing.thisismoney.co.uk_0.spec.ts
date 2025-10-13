import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_investing.thisismoney.co.uk_0', ['https://investing.thisismoney.co.uk/companies/A'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
