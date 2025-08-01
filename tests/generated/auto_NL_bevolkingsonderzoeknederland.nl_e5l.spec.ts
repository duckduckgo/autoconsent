import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bevolkingsonderzoeknederland.nl_e5l', ['https://www.bevolkingsonderzoeknederland.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
