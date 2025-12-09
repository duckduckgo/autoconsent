import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_bricklink.com_9wr', ['https://www.bricklink.com/v2/main.page'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
