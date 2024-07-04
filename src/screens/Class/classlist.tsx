import  { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { getData } from '../../config/firebaseMethods';

// const data = [
//   {
//     Age: "676",
//     Class: "1",
//     Email: "hghjgjh",
//     Father_Name: "hghjgjhgjh",
//     Hobby: "ghgjh",
//     Last_Qualification: "hvhjvh",
//     Mobile: "67687",
//     id: "-O0t-eNz96aMmp-kgG8t",
//     name: "jdkewkdej"
//   },
//   {
//     Age: "676",
//     Class: "2",
//     Email: "hghjgjh",
//     Father_Name: "hghjgjhgjh",
//     Hobby: "ghgjh",
//     Last_Qualification: "hvhjvh",
//     Mobile: "67687",
//     id: "-O0t0OKenn7-YUJXp9yL",
//     name: "jdkewkdej"
//   },
//   {
//     Age: "3636",
//     Class: "3",
//     Email: "Zbznznz",
//     Father_Name: "Dbbdbddb",
//     Hobby: "Xhdjd",
//     Last_Qualification: "Zbznznzn",
//     Mobile: "37$7$7",
//     id: "-O0t4zI4PKVCEcOwf2fJ",
//     name: "Dndnd"
//   },
//   {
//     Age: "3636",
//     Class: "4",
//     Email: "Zbznznz",
//     Father_Name: "Dbbdbddb",
//     Hobby: "Xhdjd",
//     Last_Qualification: "Zbznznzn",
//     Mobile: "37$7$7",
//     id: "-O0t4zI4PKVCEcOwf2fJ",
//     name: "Dndnd"
//   }
// ];


const Classlist = () => {
  const [selectedClass, setSelectedClass] = useState<any>('');
  const [filteredData, setFilteredData] = useState<any>([]);
  const [data, setData] = useState<any>([]);
  const isLoading:boolean = false

  
  useEffect(()=>{

    getData('Student Data')
    .then((res:any)=>{
      // console.log(Object.values(res))
      setData(...[Object.values(res)])
      console.log(...[data])
    }).catch((err)=>{
      console.log(err)
    })
 },[])

  const handleClassChange = (e:any) => {
    const selectedClass = e.target.value;
    setSelectedClass(selectedClass);

    // Filter data based on selected class
    const filteredItems:any = data.filter((item:any) => item.Class === selectedClass);
    setFilteredData(filteredItems);
  };

  return (
    <div>
      <h2>Select Class to see Students list:</h2>
      <select className='form-control mt-5' value={selectedClass} onChange={handleClassChange}>
        <option value="" disabled>Select Class</option>
        <option value="1">Class 1</option>
        <option value="2">Class 2</option>
        <option value="3">Class 3</option>
        <option value="4">Class 4</option>
      </select>

      {isLoading ? (<p>Loading...</p>)
      :(

        <table className='table mt-5'>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Father Name</th>
          </tr>
        </thead>
        <tbody>
        {filteredData.map((item:any,index:any) => (
          <tr key={item.id}>
            <td>{index+1}</td>
            <td>{item.name}</td>
            <td>{item.Father_Name}</td>
          </tr>
        ))}
        </tbody>
      </table>
      )}
    </div>
  );
};

export default Classlist;
