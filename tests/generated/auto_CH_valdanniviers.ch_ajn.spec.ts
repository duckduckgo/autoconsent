import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_valdanniviers.ch_ajn', ['https://www.valdanniviers.ch/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
