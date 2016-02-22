import React from 'react';

/**
 * Renders a Font Awesome icon.
 * Example usage:
 * 	<FontAwesome icon="star" />
 */
let FontAwesome = React.createClass({
    render: function() {
        let classes = `fa fa-${this.props.icon}`;
        return <i className={classes}></i>;
    }
});

export default FontAwesome;
