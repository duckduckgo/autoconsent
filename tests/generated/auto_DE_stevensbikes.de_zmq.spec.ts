import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_stevensbikes.de_zmq', ['https://www.stevensbikes.de/en/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
