import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fondsweb.com_sf6', ['https://www.fondsweb.com/ch'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
