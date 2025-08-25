import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_vauxhall.co.uk_0', ['https://www.vauxhall.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
