class Employee extends Person {
    private type : EmployeeType;

    constructor(id: string, name: string, email: string, phone: string,type : EmployeeType) {
        super(id, name, email,phone);
        this.type = EmployeeType;
    }
    
    getType(): EmployeeType {
        return this.type;
    }
}