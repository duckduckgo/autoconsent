import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_calendarioslaborales.com_8ia', ['https://calendarioslaborales.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
