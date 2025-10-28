import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_geneve.consulfrance.org_bls', ['https://geneve.consulfrance.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
