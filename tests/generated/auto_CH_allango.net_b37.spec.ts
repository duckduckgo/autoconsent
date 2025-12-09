import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_allango.net_b37', ['https://www.allango.net/?shhh=true'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
