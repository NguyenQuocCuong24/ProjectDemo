import React, { useState } from 'react';

//khi nào dùng useState: khi muốn dữ liệu thay đổi thì giao diện tự động cập nhật 
function Users() {
  const [count, setCount] = useState(() => {
    const olders = [100, 200, 300]
    const total = olders.reduce((total, cur) => total + cur) //truyền callback cho useState
    console.log(total)
    return total;
  })

  const handleIncrease = () => {
    // count = count + 1;
    // setCount()
    setCount(prevState => prevState + 1) // sử dụng callback với setState
  }

  return (
    <div>
      <h1>Count: {count} </h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );

}


export default Users;
