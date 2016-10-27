import React from 'react';

var WidgetPage = ({ widgets, firebaseRef }) => <div>
  <h2>Widgets Page!</h2>

  <ul>
    { Object.keys(widgets).map((id) => {
      var widget = widgets[id];

      return <li key={ id }>{ widget.name }</li>
    })}
  </ul>

  <button onClick={ () => firebaseRef.push({name: 'Generic Widget'})}>Add a generic widget</button>
  <button onClick={ () => firebaseRef.push({name: 'Red Widget'})}>Add a red widget</button>
  <button onClick={ () => firebaseRef.push({name: 'Blue Widget'})}>Add a blue widget</button>
</div>;

export default WidgetPage;
