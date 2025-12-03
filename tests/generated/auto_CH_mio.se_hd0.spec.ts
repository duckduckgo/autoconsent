import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_mio.se_hd0', ['https://www.mio.se/p/charlie-fatolj/29965?id=M1726858'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
