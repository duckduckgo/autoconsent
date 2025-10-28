import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_pocketbook.ch_ggg', ['https://pocketbook.ch/en-ch'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
