import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_nativeunion.com_eey', ['https://www.nativeunion.com/products/pop-phone?ueid=7726b8758bbb1c0cd4fd3a2649500177'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
