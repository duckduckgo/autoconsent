import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_autoersatzteile24.ch_pw7', ['https://www.autoersatzteile24.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
