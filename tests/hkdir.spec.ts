import generateCMPTests from '../playwright/runner';

// the site reloads the page right after the click, so the self test cannot run
generateCMPTests(
    'hkdir',
    ['https://hkdir.no/', 'https://studentombudfagskole.no/', 'https://fagskoleradet.no/', 'https://erihplus.hkdir.no/'],
    {
        testSelfTest: false,
    },
);
