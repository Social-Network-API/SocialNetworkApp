import React from "react";
import profileDefault from "../assets/images/perfil.jpg";
import FollowerCard from "../components/FollowerCard";

const friends = [
    { name: "F Cristina Arce Cossio", profilePic: profileDefault },
    { name: "Percy P. F. Morales Maldonado", profilePic: profileDefault },
    { name: "Diego Rivera S'f", profilePic: profileDefault },
    { name: "Samuel F-c", profilePic: profileDefault },
    { name: "Trujillo F. Erlinda", profilePic: profileDefault },
    { name: "Luis F. Moya", profilePic: profileDefault },
];

const FriendsList = () => {
    return (
        <div className="friends-list">
            {friends.map((friend, index) => (
                <FollowerCard
                    key={index}
                    name={friend.name}
                    profilePic={friend.profilePic}
                />
            ))}
        </div>
    );
};

export default FriendsList;
