import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_bricklink.com_z77', ['https://www.bricklink.com/v2/main.page'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
