const personHelper = {
    REST_ACTIONS: {
    },
    ACTIONS: {
        CHANGE_EDITING_PERSON: "CHANGE_EDITING_PERSON"
    },
    defaultPersonList: [
        {
            id: 1,
            name: "William",
            email: "william@webfm.net",
            phone: "0430 567 899"
        },
        {
            id: 2,
            name: "Peter",
            email: "peter@webfm.net",
            phone: "0432 222 323"
        }
    ],
    defaultPerson: {
        id: 0,
        name: "",
        email: "",
        phone: ""
    }
}

export default personHelper;