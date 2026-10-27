import generateCMPTests from '../playwright/runner';

generateCMPTests('nord-security', ['https://nordvpn.com/', 'https://nordlayer.com/', 'https://coveron.com/']);
generateCMPTests('nord-security', ['https://nordpass.com/'], {
    skipRegions: ['US'],
});
