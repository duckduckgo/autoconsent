import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_tabellenexperte.de_7kb', ['https://www.tabellenexperte.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
