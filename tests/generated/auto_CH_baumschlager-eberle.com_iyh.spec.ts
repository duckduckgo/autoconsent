import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_baumschlager-eberle.com_iyh', ['https://baumschlager-eberle.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
