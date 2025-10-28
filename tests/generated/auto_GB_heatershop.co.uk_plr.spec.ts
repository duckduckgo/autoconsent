import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_heatershop.co.uk_plr', ['https://www.heatershop.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
