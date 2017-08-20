import transfromJSX from 'babel-plugin-transform-react-jsx';

export default {
  babelOptions: {
    filterExtensions: ['jsx'],
    plugins: [
      [transfromJSX, {
        pragma: 'h',
      }],
    ],
  },
};
