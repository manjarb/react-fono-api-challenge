import faker from 'faker'

export default {
  id: faker.random.uuid(),
  name: faker.name.firstName(),
}
