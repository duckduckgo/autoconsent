import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_forestresearch.gov.uk_i1r', ['https://www.forestresearch.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
