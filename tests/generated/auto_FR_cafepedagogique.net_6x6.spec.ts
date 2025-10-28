import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cafepedagogique.net_6x6', ['https://www.cafepedagogique.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
