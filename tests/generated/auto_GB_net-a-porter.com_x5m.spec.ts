import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_net-a-porter.com_x5m', ['https://www.net-a-porter.com/en-gb/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
