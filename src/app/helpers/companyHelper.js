const companyHelper = {
    REST_ACTIONS: {
        CREATE_COMPANY: "CREATE_COMPANY"
    },
    ACTIONS: {
        CHANGE_EDITING_COMPANY: "CHANGE_EDITING_COMPANY",
        UPDATE_COMPANY: "UPDATE_COMPANY"
    },
    defaultCompanyList: [
        {
            id: 1,
            name: "Company A",
            country: "AU",
            address: "Level 3/20 Martin Pl, Sydney NSW 2000",
            contactPerson: {
                id: 1,
                name: "William",
                email: "william@webfm.net",
                phone: "0430 567 899"
            }
        },
        {
            id: 2,
            name: "Company B",
            country: "US",
            address: "New York, NY, USA",
            contactPerson: {
                id: 2,
                name: "Peter",
                email: "peter@webfm.net",
                phone: "0432 222 323"
            }
        }
    ]
}

export default companyHelper;