import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_derkleinetiptopf.ch_f6u', ['https://derkleinetiptopf.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
