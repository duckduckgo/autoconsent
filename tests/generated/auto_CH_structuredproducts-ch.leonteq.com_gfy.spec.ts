import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_structuredproducts-ch.leonteq.com_gfy', ['https://structuredproducts-ch.leonteq.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
