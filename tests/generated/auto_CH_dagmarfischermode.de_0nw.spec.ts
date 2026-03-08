import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_dagmarfischermode.de_0nw', ['https://dagmarfischermode.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
