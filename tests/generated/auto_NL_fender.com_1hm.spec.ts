import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_NL_fender.com_1hm',
    ['https://nl.fender.com/?shpxid=cf03279a-649a-4b4a-8360-38f5907f9084&t-p-c=NL&t-p-l=en&_s=_s-c-u&t-p-r='],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] },
);
