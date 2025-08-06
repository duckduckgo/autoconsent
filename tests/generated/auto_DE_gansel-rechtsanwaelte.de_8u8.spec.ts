import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_gansel-rechtsanwaelte.de_8u8', ['https://www.gansel-rechtsanwaelte.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
