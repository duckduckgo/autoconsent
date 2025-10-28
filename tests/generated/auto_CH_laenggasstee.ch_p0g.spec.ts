import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_laenggasstee.ch_p0g', ['https://laenggasstee.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
