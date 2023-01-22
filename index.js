// Write your solution in this file!
const employee = {
    name: "luis",
    streetAddress: "123 main street",
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    return {...employee,
            [key]: value,
        }
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee.name = 'Sam';
    employee.streetAddress = `12 Broadway`;
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    const copyOfEmployee={...employee};
    delete copyOfEmployee[key];
    console.log(employee);
    return copyOfEmployee;

}
function destructivelyDeleteFromEmployeeByKey(object, key){
    delete object[key];
    return object;

}
console.log(deleteFromEmployeeByKey(employee, `name`));

