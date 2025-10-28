import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ruessels-landhaus.de_cyc', ['https://www.ruessels-landhaus.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
