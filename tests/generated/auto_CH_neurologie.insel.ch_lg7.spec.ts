import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_neurologie.insel.ch_lg7', ['https://neurologie.insel.ch/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
