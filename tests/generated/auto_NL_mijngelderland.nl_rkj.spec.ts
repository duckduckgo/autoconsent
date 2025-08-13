import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_mijngelderland.nl_rkj', ['https://mijngelderland.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
