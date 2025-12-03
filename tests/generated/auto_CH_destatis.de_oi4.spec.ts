import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_destatis.de_oi4', ['https://www.destatis.de/DE/Home/_inhalt.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
