const name: string = null;
const sampleObject = {
    name: 'John Doe',
    age: 30,
    hobbies: ['reading', 'coding', 'traveling'],
    address: {
        street: '123 Main St',
        city: 'Metropolis',
        zipCode: '54321',
    },
};

function greetUser(user: { name: string; age: number }) {
    console.log(`Hello, ${user.name}! You are ${user.age} years old.`);
}

async function fetchData(_url: string): Promise<{ data: string; status: number }> {
    return await new Promise((resolve) => {
        setTimeout(() => resolve({ data: 'Sample Data', status: 200 }), 1000);
    });
}

const longString =
    'This is a very long string that should break into multiple lines if it exceeds the specified print width in your Prettier configuration.';

const inconsistentSpacing = { foo: 'bar', baz: 'qux' };
const anotherVariable = 'test';

export { sampleObject, greetUser, fetchData, longString, inconsistentSpacing };
