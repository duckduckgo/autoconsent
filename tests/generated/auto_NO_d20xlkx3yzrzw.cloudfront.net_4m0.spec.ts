import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_d20xlkx3yzrzw.cloudfront.net_4m0', ['https://d20xlkx3yzrzw.cloudfront.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
