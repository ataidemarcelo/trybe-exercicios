import { IPizza } from './IPizza';

interface ICommunPizza extends IPizza {
  flavor: 'Calabresa' | 'Frango' | 'Pepperoni'
}

interface IVegetarianPizza extends IPizza {
  flavor: 'Marguerita' | 'Palmito' | 'Cogumelo'
}

interface ISweetPizza extends IPizza {
  flavor: 'Nutela' | 'Goiabada' | 'Marshmallow'
}

const pizzaCalabresa: ICommunPizza = {
  flavor: 'Calabresa',
  slices: 8,
};

const pizzaMarguerita: IVegetarianPizza = {
  flavor: 'Marguerita',
  slices: 4,
};

const pizzaNutela: ISweetPizza = {
  flavor: 'Nutela',
  slices: 8,
};

export default {
  pizzaCalabresa,
  pizzaMarguerita,
  pizzaNutela,
};
