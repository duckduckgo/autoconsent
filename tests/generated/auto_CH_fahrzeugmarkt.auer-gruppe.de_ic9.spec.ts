import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fahrzeugmarkt.auer-gruppe.de_ic9', ['https://fahrzeugmarkt.auer-gruppe.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
