import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ldlc.com_nck', ['https://www.ldlc.com/fr-ch/?origin=www.ldlc.com'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
