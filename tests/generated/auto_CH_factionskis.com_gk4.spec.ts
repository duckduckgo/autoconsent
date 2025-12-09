import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_factionskis.com_gk4', ['https://factionskis.com/en-ch'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
