import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_forestryandland.gov.scot_9an', ['https://forestryandland.gov.scot/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
