import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fvrz.ch_107', ['https://www.fvrz.ch/fussballverband-region-zuerich.aspx'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
