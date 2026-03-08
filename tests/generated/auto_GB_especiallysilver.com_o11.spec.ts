import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_especiallysilver.com_o11', ['https://especiallysilver.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
