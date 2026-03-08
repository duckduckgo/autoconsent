import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bohrungen.lgrb-bw.de_r9h', ['https://bohrungen.lgrb-bw.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
