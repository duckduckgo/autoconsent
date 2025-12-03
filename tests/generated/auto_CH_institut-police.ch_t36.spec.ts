import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_institut-police.ch_t36', ['https://www.institut-police.ch/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
