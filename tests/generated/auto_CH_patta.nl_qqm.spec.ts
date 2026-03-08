import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_patta.nl_qqm', ['https://ch.patta.nl/?shpxid=91d52fb4-056e-4f98-8f4d-eae30ec7eeb6'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
