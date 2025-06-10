import { faker } from '@faker-js/faker';

export const generateRegistrationData = ({
  name = faker.person.fullName(),
  email = faker.internet.email(),
  password = faker.internet.password(),
  acceptTerms = true
} = {}) => {
  return {
    name,
    email,
    password,
    acceptTerms
  };
}