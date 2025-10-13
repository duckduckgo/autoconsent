import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_AU_quantamagazine.org_4lo',
    ['https://www.quantamagazine.org/inside-the-proton-the-most-complicated-thing-imaginable-20221019/'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] },
);
