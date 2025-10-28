import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_guidesocial.ch_6ws', ['https://www.guidesocial.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
