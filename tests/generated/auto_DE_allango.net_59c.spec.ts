import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_allango.net_59c', ['https://www.allango.net/?shhh=true'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
