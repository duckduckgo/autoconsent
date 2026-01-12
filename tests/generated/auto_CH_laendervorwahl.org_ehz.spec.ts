import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_laendervorwahl.org_ehz', ['https://www.laendervorwahl.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
