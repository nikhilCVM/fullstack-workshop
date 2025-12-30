const validatePassword = (password) => {
  const rules = [
    { test: password.length >= 8, error: "Too short" },
    { test: /[A-Z]/.test(password), error: "Missing uppercase" },
    { test: /[a-z]/.test(password), error: "Missing lowercase" },
    { test: /[0-9]/.test(password), error: "Missing number" },
    { test: /[!@#$%^&*]/.test(password), error: "Missing special character" }
  ];

  const errors = rules
    .filter(r => !r.test)
    .map(r => r.error);

  return { isValid: errors.length === 0, errors };
};

// Test runner (still arrow + array methods)
['Abc123!@', 'abc'].map(p => {
  const { isValid, errors } = validatePassword(p);

  // Build bullet error list using reduce
  const errorText = errors.length
    ? errors.reduce((output, err) => `${output}• ${err}\n`, '') 
    : `✔ Password passed all checks!`;

  console.log(`
============================
Password tested: "${p}"
Status: ${isValid ? `✔ VALID` : `✖ INVALID`}
Issues found:
${errorText}============================`);
});
