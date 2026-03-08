import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_center-parcs.vakantieparken-bungalowparken.nl_76z', ['https://center-parcs.vakantieparken-bungalowparken.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
