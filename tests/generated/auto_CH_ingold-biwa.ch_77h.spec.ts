import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ingold-biwa.ch_77h', ['https://www.ingold-biwa.ch/dech'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
