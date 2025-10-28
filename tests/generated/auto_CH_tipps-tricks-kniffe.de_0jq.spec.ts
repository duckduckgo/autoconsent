import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_tipps-tricks-kniffe.de_0jq', ['https://www.tipps-tricks-kniffe.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
