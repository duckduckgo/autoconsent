import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_rolexparismasters.com_u35', ['https://www.rolexparismasters.com/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
