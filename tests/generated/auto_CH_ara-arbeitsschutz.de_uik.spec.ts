import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ara-arbeitsschutz.de_uik', ['https://ara-arbeitsschutz.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
