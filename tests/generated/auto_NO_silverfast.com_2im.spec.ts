import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_silverfast.com_2im', ['https://www.silverfast.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
