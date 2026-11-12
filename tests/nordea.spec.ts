import generateCMPTests from '../playwright/runner';

const urls = ['https://www.nordea.se/', 'https://www.nordea.fi/', 'https://www.nordea.no/', 'https://www.nordea.dk/'];

generateCMPTests('nordea', urls, { mobile: false });
generateCMPTests('nordea', urls, { mobile: true });
