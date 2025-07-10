import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_cashconverters.co.uk_mu6', ['https://www.cashconverters.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
