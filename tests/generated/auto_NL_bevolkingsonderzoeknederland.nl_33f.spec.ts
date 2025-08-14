import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bevolkingsonderzoeknederland.nl_33f', ['https://www.bevolkingsonderzoeknederland.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
