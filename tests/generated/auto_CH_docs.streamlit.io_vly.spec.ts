import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_docs.streamlit.io_vly', ['https://docs.streamlit.io/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
