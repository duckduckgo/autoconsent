import generateCMPTests from '../playwright/runner';

const urls = [
    'https://www.johnkennedysubaru.com/',
    'https://www.penske.com/',
    'https://www.longotoyota.com/',
    'https://www.righthonda.com/',
];

generateCMPTests('complyauto', urls, { mobile: true });
generateCMPTests('complyauto', urls, { mobile: false });
