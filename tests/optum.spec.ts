import generateCMPTests from '../playwright/runner';

const urls = ['https://www.optum.com/', 'https://www.optum.com/es/', 'https://business.optum.com/'];

generateCMPTests('optum', urls, { mobile: true });
generateCMPTests('optum', urls, { mobile: false });
