import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_AU_theperfectmatch-lufthansagroup.com_6kv',
    ['https://theperfectmatch-lufthansagroup.com/gb/en/corporate/business-class-privacy-seat/'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] },
);
