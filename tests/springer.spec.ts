import generateCMPTests from '../playwright/runner';

generateCMPTests('com_springer', ['https://www.beobachter.ch/', 'https://www.blick.ch/'], {
    skipRegions: ['GB'],
    testOptIn: false,
    testSelfTest: false,
});
