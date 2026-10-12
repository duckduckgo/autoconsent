import generateCMPTests from '../playwright/runner';

// the notice is shown in all regions, but non-US visitors get a bot challenge first
generateCMPTests(
    'solvhealth.com',
    ['https://www.solvhealth.com/pa/c/east-stroudsburg-pa-srv-dot-physicals', 'https://www.solvhealth.com/urgent-care/ny/new-york'],
    {
        onlyRegions: ['US'],
    },
);
