import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fondation-barry.ch_zat', ['https://www.fondation-barry.ch/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
