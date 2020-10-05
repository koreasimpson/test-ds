import * as React from "react";

export const MyTestComponent = (props: any) => {
  return (
    <div>
      <p>이렇게 하면 버그가 해결 되나요?</p>
      <p>{props.children}</p>
    </div>
  );
};
