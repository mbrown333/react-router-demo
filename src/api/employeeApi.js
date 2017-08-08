const data = [
    {
        id: 1,
        name: 'Jim',
        email: 'jim@company.com',
        phone: '111-222-1111'
    },
    {
        id: 2,
        name: 'Sheila',
        email: 'sheila@company.com',
        phone: '111-222-2222'
    },
    {
        id: 3,
        name: 'Joe',
        email: 'joe@company.com',
        phone: '111-222-3333'
    },
    {
        id: 4,
        name: 'Dan',
        email: 'dan@company.com',
        phone: '111-222-4444'
    },
    {
        id: 5,
        name: 'Cathy',
        email: 'cathy@company.com',
        phone: '111-222-5555'
    },
    {
        id: 6,
        name: 'Bob',
        email: 'bob@company.com',
        phone: '111-222-6666'
    },
]

class EmployeeApi {
    getEmployees() {
        return data
    }

    getEmployeeById(id) {
        return data.find((employee) => { return employee.id === id })
    }
}

export default EmployeeApi