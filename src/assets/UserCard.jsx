const userData=[{
    name:"Mathiyarasu",
    city:"Salem",
    discr:"Fullstack Developer",
    skills:["Java",
        "HTML",
        "CSS",
        "JS",
        "Bootstrap",
        "Tailwind",
        "Nodejs",
        "Reactjs",
        "Github",
        "MongoDB", ],
        online:true,
        profile:"mathi.png"
},{
    name:"Sowmiyan",
    city:"Namakkal",
    discr:"Fullstack Developer",
    skills:["Java",
        "HTML",
        "CSS",
        "JS",
        "Nodejs",
        "Linux",
        "Python",
        "AWS",
        "Github",
        "SQL","C","MongoDB" ],
        online:false,
        profile:"sowmiyan.png"
}
,{
    name:"Sheela",
    city:"Krishnageri",
    discr:"Frontend Developer",
    skills:["Java",
        "HTML",
        "CSS",
        "JS",
        "Bootstrap",
        "Tailwind",
        "Github"],
        online:false,
        profile:"Sheela.png"
}
,{
    name:"Arunboopathi",
    city:"Namakkal",
    discr:"Dev OOPs",
    skills:["Java",
        "HTML",
        "CSS",
        "JS",
        "AWS",
        "Linux",
        "Docker",
        "Github", ],
        online:true,
        profile:"Arun.png"
}
]

function User(props) {
    return <div className="card-container">
        <span className={props.online?"pro online":"pro offline"}>{props.online?"ONLINE":"OFFLINE"}</span>
        <img src={props.profile} className="img" alt="" />
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.discr}</p>
        <div className="buttons">
            <button className="primary">Message</button>
            <button className="primary outline">Following</button>
        </div>
        <div className="skills">
            <h6>
                Skills
            </h6>
            <ul>
                {props.skills.map((skill,index)=>(
                    <li key={index}>{skill}</li>
                ))} 
            </ul>
        </div>
    </div>
}

export const UserCard = () => {
  return (
  <>
    {userData.map((user,index)=>(
    <User key={index} 
    name={user.name} 
    city={user.city}
    discr={user.discr}
    skills={user.skills}
    online={user.online}
    profile={user.profile} />
  ))}
  </>
  )
}
