import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bevolkingsonderzoeknederland.nl_0n1', ['https://www.bevolkingsonderzoeknederland.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
