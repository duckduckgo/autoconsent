import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_waterstones.com_o75', ['https://www.waterstones.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
