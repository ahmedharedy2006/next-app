import { sort } from 'fast-sort';
import Link from 'next/link';
import React from 'react'

interface User {
    id: number;
    name: string;
    email: string;
}


const UserTable = async () => {
    const res = await fetch(
        'https://jsonplaceholder.typicode.com/users' , 
         {cache: "no-store"});

    const users: User[] = await res.json();

    const sortedUsers = sort(users).asc(user => user.name);
  return (
    <table className='table table-bordered table-zebra my-7'>
            <thead className='table-header bg-stone-300'>
                <tr>
                    <th className='text-xl text-black'>
                        <Link href='/users?sortOrder=name'>
                            <b>Name</b>
                        </Link>
                    </th>
                    <th className='text-xl text-black'>
                    <Link href='/users?sortOrder=email'>
                            <b>E-Mail</b>
                        </Link>
                    </th>
                </tr>
            </thead>
            <tbody>
            {sortedUsers.map(user => (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                </tr>
                
            ))}
            </tbody>
            
        </table>
  )
}

export default UserTable;