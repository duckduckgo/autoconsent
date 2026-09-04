import generateCMPTests from '../playwright/runner';

// The reported page (https://makezine.com/article/craft/music/diy-attenuator-box-for-yo/) shows the
// same popup, but only after a user interaction, which this harness does not perform.
const urls = ['https://makezine.com/', 'https://make.co/'];

generateCMPTests('make-community', urls, { mobile: false });
generateCMPTests('make-community', urls, { mobile: true });
