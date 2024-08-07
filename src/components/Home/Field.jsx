/* eslint-disable react/prop-types */
import React from "react";

const Field = ({ label, children, error }) => {
  const id = getChildId(children);

  return (
    <div className="flex flex-col items-start justify-start mt-2 p-0 w-full mr-2">
      {label && (
        <label htmlFor={id} className="mb-1 font-semibold">
          {label}
        </label>
      )}

      {children}

      {!!error && <div className="text-red-500 text-sm">{error?.message}</div>}
    </div>
  );
};

const getChildId = (children) => {
  const child = React.Children.only(children);

  if ("id" in child.props) {
    return child?.props?.id;
  }
};

export default Field;
