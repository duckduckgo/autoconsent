import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bluettipower.co.uk_tw0', ['https://bluettipower.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
