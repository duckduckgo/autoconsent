import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_taylorwimpey.co.uk_w83', ['https://www.taylorwimpey.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
