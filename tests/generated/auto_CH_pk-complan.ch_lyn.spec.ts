import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_pk-complan.ch_lyn', ['https://www.pk-complan.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
