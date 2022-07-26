export const reducer = (state, action) => {
	if (action.type === 'ADD_iTEM') {
		const newPeople = [...state.people, action.payload];
		return {
			...state,
			// people: [...state.people, { id: Math.random(), name: action.payload }],
			people: newPeople,
			isModalOpen: true,
			// modalContent: `${action.payload} has been added to the list!`,
			modalContent: 'has been added to the list!',
		};
	}
	if (action.type === 'NO_VALUE') {
		return {
			...state,
			isModalOpen: true,
			modalContent: 'Please enter a value',
		};
	}
	if (action.type === 'CLOSE_MODAL') {
		return {
			...state,
			isModalOpen: false,
		};
	}

	if (action.type === 'REMOVE_ITEM') {
		const newPeople = state.people.filter(
			(person) => person.id !== action.payload
		);
		return {
			...state,
			people: newPeople,
			isModalOpen: true,
			modalContent: 'has been removed from the list!',
		};
	}

	throw new Error('Action not supported');
};
