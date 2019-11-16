const jobHelper = {
    defaultActiveTabId: 1,
    REST_URL: `https://cors-anywhere.herokuapp.com/https://test.swipejobs.com/api/worker`,
    REST_ACTIONS: {
        FETCH_JOBS: "FETCH_JOBS",
        ACCEPT_JOB: "ACCEPT_JOB",
        REJECT_JOB: "REJECT_JOB"
    },
    ACTIONS: {
        CHANGE_TAB: "CHANGE_TAB",
        CLOSE_WARNING_DIALOG: "CLOSE_WARNING_DIALOG"
    }
}

export default jobHelper;