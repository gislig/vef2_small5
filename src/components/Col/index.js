import React from "react";

const Col = ({size, children}) => {
    const colWidth = 100 / 12 * size + '%';
    return <span style={{width: colWidth, minHeight: '100%'}}>{children}</span>;
}

Col.defaultProps = {
    size: 1
};

export default Col;
