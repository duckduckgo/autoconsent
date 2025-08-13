import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ldlc.com_tu9', ['https://www.ldlc.com/fr-ch/?origin=www.ldlc.com'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
