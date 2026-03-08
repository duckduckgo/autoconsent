import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bedandbreakfast.guide_cm1', ['https://bedandbreakfast.guide/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
