import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_smithandsmith.ch_m38', ['https://www.smithandsmith.ch/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
