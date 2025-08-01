import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_mijngelderland.nl_x7m', ['https://mijngelderland.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
