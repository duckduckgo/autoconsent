import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_onlinemortgageadvisor.co.uk_0', ['https://www.onlinemortgageadvisor.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
