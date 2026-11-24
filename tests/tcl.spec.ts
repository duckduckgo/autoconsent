import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'tcl.com',
    ['https://www.tcl.com/it/it', 'https://www.tcl.com/de/de', 'https://www.tcl.com/uk/en', 'https://www.tcl.com/au/en'],
    {
        skipRegions: ['US'],
    },
);
