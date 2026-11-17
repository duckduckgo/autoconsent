import generateCMPTests from '../playwright/runner';

generateCMPTests('store2000.fr', ['https://store2000.fr/volet-roulant/reparation-volet-roulant/lyon/'], {
    testSelfTest: false,
});
