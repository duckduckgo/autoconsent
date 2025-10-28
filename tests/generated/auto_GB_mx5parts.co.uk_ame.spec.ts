import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_mx5parts.co.uk_ame', ['https://www.mx5parts.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
