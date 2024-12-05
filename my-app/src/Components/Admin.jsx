import React, { useEffect, useState } from 'react';

function Admin() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Sử dụng API fetch của trình duyệt
    fetch('https://jsonplaceholder.typicode.com/posts/2')
      .then(response => response.json())
      .then(data => setData(data));
  }, []); // Chỉ chạy 1 lần khi component được mount

  return (
    <div>
      <h1>Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Admin;
