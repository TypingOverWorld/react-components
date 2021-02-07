// Based on a component from React Docs https://reactjs.org/docs/composition-vs-inheritance.html

function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

export default FancyBorder;