import React from "react";
import styles from "./row.css";
import PropTypes from 'prop-types';

const Row = ({children}) => {
    return getRowContents(children);
}

const getRowContents = (children) => {

    let rows = formatOverflow(children);

    let rowContents = rows.map((row, index) => {
        return (
            <div key={index} className={styles.row}>
                {row}
            </div>
        );
    });

    return rowContents;
}

const formatOverflow = (children) => {

    let sum = 0;
    let rowContent = [];
    let rows = [];

    React.Children.map(children, (col) => {

        sum = sum + col.props.size;

        // Place col in new row if there's no place for it in current row
        if (sum > 12) {
            rows.push(rowContent);
            rowContent = [];
            sum = col.props.size;
        }

        rowContent.push(col);

    });
    rows.push(rowContent);

    return rows;
}

// Should contain children!
Row.propTypes = {
    children: PropTypes.node.isRequired
};


export default Row;
