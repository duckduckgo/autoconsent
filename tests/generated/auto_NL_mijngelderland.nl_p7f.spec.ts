import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_mijngelderland.nl_p7f', ['https://mijngelderland.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
