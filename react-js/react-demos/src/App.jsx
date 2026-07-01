import React from 'react'

const App = () => {
  return (
    <div>
      <Weather temperature={16} />
      <Weather temperature={12} />
      <Weather temperature={27} />
      <UserStatus loggedIn={true} isAdmin={false} />
      <UserStatus loggedIn={false} isAdmin={false} />
      <UserStatus loggedIn={true} isAdmin={true} />
      <Greeting timeOfDay={"morning"} />
      <Greeting timeOfDay={"afternoon"} />
    </div>
  )
}

export default App;


const Weather = ({temperature}) => {
  if(temperature > 25){
    return <p>It's hot outside</p>
  }else if(temperature >= 15 && temperature <=25){
    return <p> It's nice outside</p>
  }else{
    return <p>It's Cold Outside</p>
  }
}

const UserStatus = ({loggedIn , isAdmin}) => {
  {
   if(!loggedIn) return <p>Not Logged in</p>
   return isAdmin ? <p>Welcome Admin</p> : <p>Welcome User</p>
   
  }
}

const Greeting = ({timeOfDay}) => {
  if(timeOfDay === "morning") return <p>Good Morning</p>
  if(timeOfDay === "afternoon") return <p>Good Afternoon</p>
}