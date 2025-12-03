import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_rki.de_tp5', ['https://www.rki.de/DE/Home/home_node.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
