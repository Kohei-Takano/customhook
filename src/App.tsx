import "./styles.css";
import { UserCard } from "./components/UserCard";
import{User}from"./types/api/user";
import { useState } from "react";
import { UserProfile } from "./types/userProfile";

const user = {
  id: 1,
  name: "じゃけぇ",
  email: "1233@sas.com",
  address: "adresssssss"
};

export default function App() {
  const [userProfiles,setUserProfiles]=useState<Array<UserProfile>>([]);
  const onClickFetchUser=()=>{
    axios.get<Array<User>>("https://jsonplaceholder.typicode.com/users").then((res)=>{
      const data=res.data.map((user)=>({
        id:user.id,
        

      }))
    })
  }
  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      <UserCard user={user} />
    </div>
  );
}
