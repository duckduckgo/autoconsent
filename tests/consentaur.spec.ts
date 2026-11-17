import generateCMPTests from '../playwright/runner';

const urls = ['https://companydata.dk/', 'https://sureit.dk/', 'https://regrettable.eu/', 'https://sirefs.com/'];

generateCMPTests('consentaur', urls, { mobile: true });
generateCMPTests('consentaur', urls, { mobile: false });
