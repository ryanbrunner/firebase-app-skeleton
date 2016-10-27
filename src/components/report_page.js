import React from 'react';

function countByName(widgets, name) {
  return Object.values(widgets).filter((widget) => widget.name == name).length
}

var ReportsPage = ({ widgets }) => <div>
  <h2>Reports Page!</h2>

  <div>Number of Widgets: { Object.keys(widgets).length }</div>
  <div>Blue Widgets: { countByName(widgets, 'Blue Widget') }</div>
  <div>Red Widgets: { countByName(widgets, 'Red Widget') }</div>
  <div>Generic Widgets: { countByName(widgets, 'Generic Widget') }</div>
</div>;

export default ReportsPage;
