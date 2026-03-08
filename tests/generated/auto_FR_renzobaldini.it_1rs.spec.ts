import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_renzobaldini.it_1rs', ['http://www.renzobaldini.it/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
