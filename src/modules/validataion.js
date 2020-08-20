// 이메일 형식 체크
const emailMatcher = /^([0-9a-zA-Z_-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

const emailValid = (email) => {
  return emailMatcher.test(email);
};

const valid = {
  emailValid: emailValid(),
};

export default valid;
