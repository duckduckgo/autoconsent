import generateCMPTests from '../playwright/runner';

const urls = ['https://www.energiedirect.nl/klantenservice/contract/opzegboete', 'https://www.essent.nl/'];

generateCMPTests('eon-nl-cookiewall', urls, { mobile: true });
generateCMPTests('eon-nl-cookiewall', urls, { mobile: false });
