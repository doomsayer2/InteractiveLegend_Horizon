import React, { Fragment } from 'react';
import { Switch, Tooltip } from 'antd';
import manageHints, { enableAllHints } from '../shared/d3Interaction';
import { removeAllHints } from '../shared/d3Manipulations';
import * as d3 from 'd3';

const ModeSwitcher = ({ mode }) => {
  const tooltipText =
    'Toggling the button will show either all hints or let you explore them step by step. However always the current one you have active - stays active';

  const toggle = (checked, event, mode) => {
    if (checked) {
      // TODO OTHER IDEA NOW:
      // Render just all steps if this is checked with different classes otherwise render them normally
      d3.selectAll('.ant-steps-item-wait').classed('makeVisible', true);
      removeAllHints();
      enableAllHints();
    } else {
      removeAllHints();
      d3.selectAll('.ant-steps-item-wait').classed('makeVisible', false);
      manageHints(mode);
    }
  };

  return (
    <Fragment>
      <Tooltip title={tooltipText} arrowPointAtCenter>
        <small style={{ marginRight: 10 + 'px' }}>Show/Hide All Hints</small>
        <Switch
          checkedChildren={'On'}
          unCheckedChildren={'Off'}
          defaultChecked={false}
          onClick={(checked, e) => {
            toggle(checked, e, mode);
          }}
        ></Switch>
      </Tooltip>
    </Fragment>
  );
};

export default ModeSwitcher;
