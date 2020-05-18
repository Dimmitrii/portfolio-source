// action - простой объект {}

// { type, payload }

// const deleteTechWithId2 = { type: 'DELETE_TECH', payload: 2 };
// const deleteTechWithId100 = { type: 'DELETE_TECH', payload: 100 };
// const deleteTechWithId200 = { type: 'DELETE_TECH', payload: 200 };
// const deleteTechWithId210 = { type: 'DELETE_TECH', payload: 210 };

// action creator

export const deleteTech = (id) => ({ type: 'DELETE_TECH', payload: id });

export const addTechToFavoriteAndUnFavorite = (id) => ({ type: 'ADD_TECH_TO_FAVORITE_AND_UN_FAVORITE', payload: id });

export const addTech = (item)=>({type:"ADD_TECH",playload:item})