class Solution {
	carFleet(target, position, speed) {
		const n = position.length;
		let cars = [];

		// 1. Combine position and speed, then sort by position descending
		for (let i = 0; i < n; i++) {
			cars.push({ pos: position[i], time: (target - position[i]) / speed[i] });
		}
		cars.sort((a, b) => b.pos - a.pos);

		let fleets = 0;
		let maxTime = 0; // Slowest time of the current fleet ahead

		// 2. Iterate through cars
		for (let car of cars) {
			// If current car takes longer than the fleet ahead, it starts a new fleet
			if (car.time > maxTime) {
				fleets++;
				maxTime = car.time; // Update the max time to the new slow car
			}
			// If car.time <= maxTime, it catches up to the fleet ahead
		}

		return fleets;
	}
}
