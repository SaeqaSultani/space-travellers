import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import Rockets from '../components/rockets/Rockets';
import store from '../redux/configureStore';

it('Check any changes to the component', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Rockets />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('the component should render a div container', () => {
  render(
    <Provider store={store}>
      <Rockets />
    </Provider>,
  );

  const rocket = screen.getByTestId('list-of-rockets');

  expect(rocket).toBeInTheDocument();
});
