import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_neubauprojekte.ch_1ws', ['https://www.neubauprojekte.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
