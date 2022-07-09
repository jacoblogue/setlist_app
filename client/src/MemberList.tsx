import React, {useState, useEffect} from 'react';

interface Data {
  [key: string]: any;
}

export const MemberList: React.FC = () => {
  const [data, setData] = useState<Data>([{}])

  useEffect(() => {
    const fetchData = async () => {
      // get data from api
      const response = await fetch('/members');
      // convert data to JSON
      const json = await response.json();

      setData(json)
    };
    fetchData()
    .catch(console.error);
  }, [])
  return (
    <div>
      {(typeof data.members === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        data.members.map((member:string, i:number) => (
          <p key={i}>{member}</p>
        ))
      )}
    </div>
  )
}