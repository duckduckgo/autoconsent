import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_kombijde.politie.nl_hz1', ['https://kombijde.politie.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
