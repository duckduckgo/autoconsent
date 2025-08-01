import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_dorsch.hogrefe.com_zfv', ['https://dorsch.hogrefe.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
