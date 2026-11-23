import generateCMPTests from '../playwright/runner';

generateCMPTests('op-consent-manager', ['https://www.op.fi/', 'https://op-koti.fi/', 'https://www.op-media.fi/']);
