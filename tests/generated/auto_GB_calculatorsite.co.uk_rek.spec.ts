import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_calculatorsite.co.uk_rek', ['https://calculatorsite.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
