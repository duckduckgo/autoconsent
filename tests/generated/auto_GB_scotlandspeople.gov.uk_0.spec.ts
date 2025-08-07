import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_scotlandspeople.gov.uk_0', ['https://www.scotlandspeople.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
