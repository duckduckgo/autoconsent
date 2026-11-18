import generateCMPTests from '../playwright/runner';

const urls = ['https://www.energiedirect.nl/'];

generateCMPTests('energiedirect', urls, { mobile: true });
generateCMPTests('energiedirect', urls, { mobile: false });
