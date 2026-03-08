import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_deutscher-fenstershop.de_drh', ['https://deutscher-fenstershop.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
