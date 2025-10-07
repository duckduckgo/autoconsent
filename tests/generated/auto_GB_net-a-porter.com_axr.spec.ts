import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_net-a-porter.com_axr', ['https://www.net-a-porter.com/en-gb/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
