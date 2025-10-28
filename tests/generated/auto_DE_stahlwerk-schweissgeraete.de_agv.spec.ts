import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_stahlwerk-schweissgeraete.de_agv', ['https://www.stahlwerk-schweissgeraete.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
