import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bcpcouncil.gov.uk_ltq', ['https://www.bcpcouncil.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
