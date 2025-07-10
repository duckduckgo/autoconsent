import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_consumersadvocate.org_qb9', ['https://www.consumersadvocate.org/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
