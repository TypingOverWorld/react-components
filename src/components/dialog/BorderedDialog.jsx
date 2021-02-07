// Based on a component from React Docs https://reactjs.org/docs/composition-vs-inheritance.html

import FancyBorder from '../wrappers/FancyBorder';

function BorderedDialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  );
}

export default BorderedDialog;