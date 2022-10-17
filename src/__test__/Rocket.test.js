import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import store from '../redux/configureStore';
import Rocket from '../components/rocket/Rocket';

it('Check any changes to the component', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Rocket />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('the component should render a div rocket', () => {
  render(
    <Provider store={store}>
      <Rocket />
    </Provider>,
  );

  const rocket = screen.getByTestId('rocket');

  expect(rocket).toBeInTheDocument();
});
