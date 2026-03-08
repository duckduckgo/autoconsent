import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_casa-andrea-cristoforo.ch_fy6', ['https://casa-andrea-cristoforo.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
