import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_AU_uniquephotiquebychristygraham.zenfoliosite.com_eh6',
    ['https://uniquephotiquebychristygraham.zenfoliosite.com/'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] },
);
