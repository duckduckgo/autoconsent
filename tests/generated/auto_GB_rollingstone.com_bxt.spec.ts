import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_rollingstone.com_bxt', ['https://www.rollingstone.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
