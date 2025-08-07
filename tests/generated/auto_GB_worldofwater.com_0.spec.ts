import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_worldofwater.com_0', ['https://worldofwater.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
