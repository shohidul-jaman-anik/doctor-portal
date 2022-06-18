// import { signOut } from 'firebase/auth';
// import React, { useEffect, useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { Link } from 'react-router-dom';
// import auth from '../../../firebase.init';
// import Loading from '../../Shared/Loading/Loading';
// import { useNavigate } from 'react-router-dom';

// const MyOrders = () => {
//     const [orders, setOrders] = useState([])
//     const [user, loading] = useAuthState(auth);
//     const navigate = useNavigate()

//     useEffect(() => {
//         if (user) {
//             fetch(`http://localhost:5000/booking?patient=${user.email}`, {
//                 method: 'GET',
//                 headers: {
//                     'authorization': `Bearer ${localStorage.getItem('accessToken')}`
//                 }
//             })
//                 .then(res => {
//                     console.log('res', res);
//                     if (res.status === 401 || res.status === 403) {
//                         signOut(auth);
//                         localStorage.removeItem('accessToken');
//                         navigate('/');
//                     }
//                     return res.json()
//                 })
//                 .then(data => {

//                     setOrders(data);
//                 });
//         }
//     }, [user])

//     if (loading) {
//         return <Loading></Loading>
//     }

//     const handleDelete = id => {
//         console.log(id)
//         const proceed = window.confirm('Are you sure ?')

//         if (proceed) {
//             const url = `http://localhost:5000/booking/${id}`
//             console.log(url)
//             fetch(url, {
//                 method: "DELETE",
//                 body: JSON.stringify({ id })
//             })
//                 .then(res => res.json())
//                 .then(data => {
//                     console.log(data)
//                     const remaining = orders.filter(p => p._id !== id)
//                     setOrders(remaining)
//                 })
//         }
//     }



//     return (
//         <div>
//             <h3>Total Orders : {orders.length}</h3>
//             <div class="overflow-x-auto">
//                 <table class="table table-zebra w-full">
//                     <thead>
//                         <tr>
//                             <th></th>
//                             <th>Name</th>
//                             <th>Date</th>
//                             <th>Time</th>
//                             <th>Treatment</th>
//                             <th>Delete Order</th>
//                             <th>Paid Order</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {orders.map((product, index) => <tr>
//                             <th>{index + 1}</th>
//                             <th>{product.userName}</th>
//                             <td>{product.date}</td>
//                             <td>{product.slot}</td>
//                             <td>{product.treatment}</td>
//                             <td onClick={() => handleDelete(product._id)}> ❌ </td>
//                             <td>
//                                 {(product.PPU && !product.paid)}&&<Link to={`/dashboard/payment/${product._id}`}><button className='btn btn-sm'>💳</button></Link>
//                                 {(product.PPU && product.paid)}&&<span className='text-success'>Paid</span>

//                             </td>
//                         </tr>)}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default MyOrders;