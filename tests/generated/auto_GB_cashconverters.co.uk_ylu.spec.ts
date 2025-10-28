import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_cashconverters.co.uk_ylu', ['https://www.cashconverters.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
