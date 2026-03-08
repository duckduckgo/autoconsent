import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_buffalocookware.com.au_277', ['https://buffalocookware.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
