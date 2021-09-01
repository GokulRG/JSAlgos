function validate(employees, schema) {
  
    // Basic checks
    if (!employees || employees.length === 0 || !schema ) {
        // Since we don't encounter an error, we can send a success message here.
        return {ok: true, message: "success"};
    }
    
    let resultObjects = [];
    let employeeQueue = [];
    
    for (let employee of employees) {
        // Add all employees to queue
        employeeQueue.push(employee);
        if (employee.reports && Object.entries(employee.reports).length !== 0) {
            employeeQueue.push(...employee.reports);
        }
    }
    
    while (employeeQueue.length !== 0) {
        let currentEmployee = employeeQueue.shift();
        resultObjects.push(validateEmployee(currentEmployee, schema));
    }
    
    for (let resultObject of resultObjects) {
        if (!resultObject.ok) {
            return resultObject;
        }
    }
    
    return { ok: true, message: "success" };
  }
  
  function validateEmployee(employee, schema) {
      
      // Get all fields of an employee
      let employeeFields = [];
      
      for (let employeeField in employee) {
          employeeFields.push(employeeField);
      }
      
      // Validate whether all required fields in the schema are present in an employee
      for (let schemaEntry of schema.employee) {
          if (schemaEntry.required) {
              if (!employeeFields.includes(schemaEntry.name)) {
                 return {ok: false, message: `${schemaEntry.name} is required`};
             }
          }
      }
      
      for (let employeeField of employeeFields) {
          
          let fieldSchema;
          for (let entry of schema.employee) {
              if (entry.name === employeeField) {
                  fieldSchema = entry;
              }
          }
          
          if (!fieldSchema || Object.entries(fieldSchema).length === 0) {
              return {ok: false, message: `unexpected property ${employeeField.name}`};
          }
          
          //  // Check if the field is required    
          // if (fieldSchema.required) {
          //     if (!employee[fieldSchema.name]) {
          //         return {ok: false, message: "name is required"}
          //     }
          // }
              
          // Check type
          if (typeof employee[fieldSchema.name] !== fieldSchema.type) {
              if (typeof employee[fieldSchema.name] === 'object' && fieldSchema.type.includes("array:employee")) {
                // Do nothing
              } else {
                return {ok: false, message: `type ${fieldSchema.type} expected for ${fieldSchema.name}`};
              }
              
          }    
         
      }
      
      return {ok: true, message: "success"};
  }

  let schema = {
    "employee": [
      {
        "name": "name",
        "required": true,
        "type": "string"
      }
    ]
};

let employees = [
    {
      "name": "alice"
    }
  ];

console.log(validate(employees, schema));

