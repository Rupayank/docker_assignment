// const controllers = require("../controller");
// const app = require("../index");
// // const pool = require("../db");
// const supertest = require("supertest");
// const { response } = require("../server");
// // const request = supertest.agent(app);

// const { jest, expect } = require("@jest/globals");

// describe("Space test suite", () => {
// 	it("Pending todos", () => {
// 		return supertest(app)
// 			.get("/todo/all")
// 			.expect("Content-Type", /json/)
// 			.expect(200);
// 	});
// 	// it("Particular todo", () => {
// 	// 	return supertest(app)
// 	// 		.get("/todo")
// 	// 		.expect("Content-Type", /json/)
// 	// 		.expect(200);
// 	// });
// });

// Try------------
// const request = require("supertest");
// // const { jest } = require("@jest/globals");
// const makeApp = require("../index");

// const createTodo = jest.fn();
// const app = makeApp({ createTodo });

// describe("POST /users", () => {
// 	beforeEach(() => {
// 		createTodo.mockReset();
// 	});
// });
// describe("When adding a new todo", () => {
// 	test("Test add new tod", async () => {
// 		const body = {
// 			description: "abra",
// 			dueDate: "2022-02-17",
// 			dueTime: "23:59:00",
// 			timeZone: "UTC",
// 		};
// 		const response = await request(app).post("/todo").send(body);
// 		expect(createUser.mock.calls[0][0]).toBe(body.description);
// 		expect(createUser.mock.calls[0][1]).toBe(body.dueDate);
// 	});
// 	// should save the username and password in the database
// 	// should contain the userId from the database in the json body
// });

// TRY---------
// const controllers = require("../controller");
// const app = require("../index");

// describe("Test", () => {
// 	test("check", async () => {
// 		const res = await controllers.getAllPendingToDo();
// 		console.log(res);
// 		expect(res.status).toBe(200);
// 	});
// });

// TRY------
// const { v4: uuidv4 } = require("uuid");
// require("dotenv").config();

// const { describe, jest, expect } = require("@jest/globals");
// const getAllPendingToDo = jest.fn();
// const app = require("../index");
// const controllers = require("../controller");
// const axios = require("axios");
// jest.mock("axios");

// describe("Test", () => {
// 	let req,
// 		resp = {};
// 	const id = uuidv4();

// 	const body = {
// 		id: id,
// 		description: "abra",
// 		dueDate: "2022-02-23",
// 		dueTime: "23:59:00",
// 		timeZone: "UTC",
// 	};
// 	beforeAll(() => {
// 		jest.setTimeout(6000);
// 		controllers.addNewTodo = jest.fn().mockResolvedValue(body);
// 	});
// 	// test("Yo", () => {});
// 	test("New test", async () => {
// 		const expected = body;
// 		const result = controllers.getAllPendingToDo(body, resp);
// 		await expect(result).resolves.toEqual(expected);
// 		// axios.get.mockResolvedValue(resp);
// 		// return await controllers
// 		// 	.getAllPendingToDo(req, resp)
// 		// 	.then((data) => expect(data).toEqual(body));
// 	});
// beforeEach(() => {
// 	jest.clearAllMocks(); //reset mock calls
// 	req = { body: {} };
// 	res = { json: jest.fn() };
// });
// test("Calls create & exec methods on User model", async () => {
// 	const response = await controllers.addNewTodo(req, res);
// 	expect(response.statusCode).toBe(400);
// 	// expect(Users.create.mock.calls.length).toBe(1);
// 	// expect(Users.exec.mock.calls.length).toBe(1);
// });
// test("check", async () => {
// 	const id = uuidv4();
// 	const body = {
// 		id: id,
// 		description: "abra",
// 		dueDate: "2022-02-17",
// 		dueTime: "23:59:00",
// 		timeZone: "UTC",
// 	};
// 	let responseObject = {};
// 	const res = {
// 		json: jest.fn().mockImplementation((result) => {
// 			responseObject = result;
// 		}),
// 	};
// 	controllers.getAllPendingToDo(body, res);
// 	expect(responseObject).toEqual(body);
// });
// });

// TRY-------
jest.mock("../controller");
const controller = require("../controller");

describe("all tests", () => {
	test("Get All pending todos", async () => {
		let req = {};
		let res = {};
		await controller.getAllPendingToDo(req, res).then((result) => {
			expect(result.description).toBe("abra");
		});
	});

	test("Add todo", async () => {
		let req = {
			id: "91f12072-ff61-45fe-9d51-17bf953c0d46",
			task_due_date: "2022-02-22T18:30:00.000Z",
			task_due_time: "23:59:00",
			client_time_zone: "UTC",
			description: "abra",
		};
		let res = {};
		await controller.addNewTodo(req, res).then((result) => {
			expect(result.description).toBe("abra");
		});
	});
	test("Get particular todo", async () => {
		let req = {};
		let res = {};
		await controller.getParticularToDo(req, res).then((result) => {
			expect(result.description).toBe("abra");
		});
	});
	test("Update todo description", async () => {
		const body = { description: "New todo" };
		let req = { body };
		let res = {};
		await controller.updateDescription(req, res).then((result) => {
			console.log(result.message);
			expect(result.message).toBe("Description updated");
		});
	});
	test("Delete todo", async () => {
		let req = { params: { id: "91f12072-ff61-45fe-9d51-17bf953c0d46" } };
		let res = {};
		await controller.deleteToDo(req, res).then((result) => {
			console.log(result.message);
			expect(result.message).toBe("Deleted");
		});
	});
});
