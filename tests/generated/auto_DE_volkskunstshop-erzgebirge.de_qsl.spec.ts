import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_volkskunstshop-erzgebirge.de_qsl', ['https://www.volkskunstshop-erzgebirge.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
