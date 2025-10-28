import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_vikingfootwear.com_y6m', ['https://vikingfootwear.com/en-NO'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
