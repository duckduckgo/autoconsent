import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_blackwells.co.uk_kkr', ['https://blackwells.co.uk/bookshop/home'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
