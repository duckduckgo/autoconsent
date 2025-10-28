import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_connells.co.uk_b00', ['https://www.connells.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
