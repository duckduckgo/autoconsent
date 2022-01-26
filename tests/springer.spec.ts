import generateCMPTests from "./runner";

generateCMPTests('com_springer', [
    'https://www.beobachter.ch/',
    'https://www.blick.ch/',
    'https://www.onet.pl/',
], {
    testOptOut: false,
    testSelfTest: false,
});