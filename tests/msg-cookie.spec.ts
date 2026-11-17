import generateCMPTests from '../playwright/runner';

const urls = [
    'https://www.ub.edu/ibub/researchers-discover-how-an-anti-obesity-drug-improves-metabolism-beyond-weight-loss/',
    'https://wgbikes.com/',
    'https://gasrenovable.org/',
    'https://www.vivoenred.com/',
];

generateCMPTests('msg-cookie', urls);
