import {User} from "../../models/user.tsx";
import { useState} from "react";
import {TOXICITY} from "../../resources.ts";
import Label from "./label.tsx";


export default function UserTable ({ users }: { users: Array<User> }) {
    const [hoverId, setHoverId] = useState(0)

    function MouseEnter (id: number){
        document.getElementById(id.toString())
        setHoverId(id)
    }

    function MouseLeave (){
        setHoverId(0)
    }

    return <div className="flex justify-center w-full py-20 bg-base-200">
        <table className="bg-base-100 table max-w-screen-md shadow-2xl">
            {/* head */}
            <thead>
            <tr className="text-white">
                <th>Top</th>
                <th>Profile Name</th>
                <th>Username</th>
                <th>Toxicity Level</th>
            </tr>
            </thead>
            <tbody>
            {users.map((user: User) => (
                <tr onMouseEnter={()=>MouseEnter(user.id)}
                    onMouseLeave={MouseLeave}
                    className={hoverId === user.id ? "cursor-pointer py-5 px-5 bg-base-200" : "cursor-pointer py-5 px-5"}
                    key={user.id} id={user.id.toString()}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>@{user.pseudo}</td>
                    <td>
                        <Label id={user.label} text={TOXICITY.get(user.label)}></Label>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
}
