import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_za.linkedin.com_4vx', ['https://za.linkedin.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
