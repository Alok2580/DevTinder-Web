import React from 'react'

const UserCard = ({user}) => {

// console.log("user",user);

// console.log(user);
  const {firstName, lastName, photoId ,about,gender,age}= user;
  // console.log(firstName);

  // console.log(user.lastName);

  // console.log(user);


  return (
    <>
      <div className="card bg-base-300 w-96 shadow-sm pd-5">
        <figure>
          <img

            src={photoId}
            alt="Shoes"
            style={{ maxWidth: '300px', maxHeight: '300px' }}

          />

        </figure>

        <div className="card-body">
          <h2 className="card-title">

            {firstName} {lastName}

          </h2>

          { age && gender && (<p>{age} {gender}</p>)}
          
          <p>{about}</p>
          <div className="card-actions justify-end">
          <button className="btn btn-primary">ignore</button>
            <button className="btn btn-secondary">Interested</button>
           
          </div>
        </div>
      </div>
    </>
  )

}

export default UserCard;
