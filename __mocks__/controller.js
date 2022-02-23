module.exports = {
	async getAllPendingToDo(req, res) {
		return Promise.resolve({
			id: "2a84829d-82f8-4159-8dc5-5b84bc908778",
			task_due_date: "2022-02-22T18:30:00.000Z",
			task_due_time: "23:59:00",
			client_time_zone: "UTC",
			description: "abra",
		});
	},
	async addNewTodo(req, res) {
		return Promise.resolve({
			id: "91f12072-ff61-45fe-9d51-17bf953c0d46",
			task_due_date: "2022-02-22T18:30:00.000Z",
			task_due_time: "23:59:00",
			client_time_zone: "UTC",
			description: "abra",
		});
	},
	async getParticularToDo(req, res) {
		return Promise.resolve({
			id: "91f12072-ff61-45fe-9d51-17bf953c0d46",
			task_due_date: "2022-02-22T18:30:00.000Z",
			task_due_time: "23:59:00",
			client_time_zone: "UTC",
			description: "abra",
		});
	},
	async updateDescription(req, res) {
		return Promise.resolve({
			message: "Description updated",
		});
	},
	async deleteToDo(req, res) {
		return Promise.resolve({
			message: "Deleted",
		});
	},
};
