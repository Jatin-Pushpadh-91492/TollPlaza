function Validation(values) {
    let error = {};
  
    if (!values.userid) {
      error.userid = "User ID should not be empty";
    }
  
    if (!values.password) {
      error.password = "Password should not be empty";
    } else {
      if (values.password.length < 8) {
        error.password = "Password must be at least 8 characters long";
      } else if (!/[a-z]/.test(values.password)) {
        error.password = "Password must contain at least one lowercase letter";
      } else if (!/[A-Z]/.test(values.password)) {
        error.password = "Password must contain at least one uppercase letter";
      } else if (!/\d/.test(values.password)) {
        error.password = "Password must contain at least one digit";
      }
    }
  
    return error;
  }
  
  export default Validation;
  