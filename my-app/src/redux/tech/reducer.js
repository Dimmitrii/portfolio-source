const initialTech = [
  {
    id: 1,
    title: 'Smartphone iPhone SE2',
    price: 100,
  },
  {
    id: 2,
    title: 'TV Samsung',
    price: 500,
  },
  {
    id: 3,
    title: 'Game console PS5',
    price: 400,
  },
  {
    id: 4,
    title: 'Game console XBOX',
    price: 500,
  },
  {
    id: 5,
    title: 'Processor ryzen 2600',
    price: 200,
  },
  {
    id: 6,
    title: 'RAM DDR4 kingston',
    price: 50,
  },
  {
    id: 7,
    title: 'PC mouse Bloody A9',
    price: 25,
  },
  {
    id: 8,
    title: 'Keyboard OCLICK',
    price: 10,
  },
  {
    id: 9,
    title: 'Motherboard ASROCK B450 Pro4',
    price: 100,
  },
  {
    id: 10,
    title: 'Headset SVEN AP-U988MV',
    price: 25,
  },
];

const initialState = {
  tech: initialTech,
  currentId:11,
};

// чистая функция
const techReducer = (state = initialState, action) => {

  let tech;

  switch (action.type) {
    case 'DELETE_TECH':
      tech = state.tech.filter(it => it.id !== action.payload);

      return { ...state, tech: tech };

    case 'ADD_TECH_TO_FAVORITE_AND_UN_FAVORITE':
      tech = state.tech.map(item => {
        if (item.id !== action.payload) {
          return item;
        }

        return { ...item, favorite: item.favorite? false : true };
      });

      return { ...state, tech: tech };

    case "ADD_TECH":
      const item = {...action.playload,id:state.currentId};
      tech = [...state.tech,item];
      
      // tech = tech.push({...action.payload,id:state.currentId}); 
      
      const id = state.currentId + 1;

      return {...state, tech:tech, currentId:id}

    default: // 1 раз в самом начале когда инифиализируется redux хранилище
      return state;
  }
  
}

export default techReducer;

// чистые функции
// 1 при одних и тех же входных параметрах - один и тот же результат
// 2 никаких side-effect
// 3 никаких мутаций
