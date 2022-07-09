import React from "react";

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  ok?: boolean;
  i?: number;
  fn?: () => void;
  person: Person;
}

export const TextField: React.FC<Props> = ({text, person}) => {
  return (
    <div>
      <input type="text" defaultValue={text +  person.firstName} />
    </div>
  )
}