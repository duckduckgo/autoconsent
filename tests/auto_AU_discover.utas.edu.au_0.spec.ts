import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_discover.utas.edu.au_0', ['https://discover.utas.edu.au/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
