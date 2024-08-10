
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
name: faker.lorem.sentence(""),
age: faker.datatype.number(""),
department: faker.commerce.department(),
yearOfService: faker.datatype.number(""),
jobTitle: faker.name.jobTitle(),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
