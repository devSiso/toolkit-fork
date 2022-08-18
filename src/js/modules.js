import globModules from './glob-modules';

const modules = [
  {
    name: 'accordion',
    loader: () => import('./modules/accordion')
  },
  {
    name: 'badge',
    loader: () => import('./components/badge')
  }
];

export default [...globModules, ...modules];
