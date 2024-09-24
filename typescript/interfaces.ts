interface Person {
	name: string;
	age: number;
	sex: "male" | "female";
}

const personOne: Person = {
	name: "Coner",
	age: 24,
	sex: "male",
}

console.log(personOne.name); // Coner
// 👇 Property 'hobbies' does not exist on type 'Person'
console.log(personOne.hobbies); // undefined