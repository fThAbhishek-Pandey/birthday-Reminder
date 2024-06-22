import React from "react";
const List = ({people})=>{
    console.log("I am listing function : ",people);
    console.log("typeof : " ,typeof people);
      return (
        <>
        {people.map((person)=>{
            console.log("person : ",person);
             const { id, name, Age, imgURL } = person;
            return <>
                <article key={id} className="flex flex-row m-4">
                    <img className="w-48 h-48 border-4 border-slate-800 rounded-full " src={imgURL} alt={name}/> 
                    <div className="relative top-16 left-8 right-0">
                        <h4 className="font-bold">{name}</h4>
                        <p className="text-base text-left text-slate-800">{Age} years</p>
                    </div>  
                </article>
            </>
         })
        }
        </>
      )
}
console.log("end of listing : ",List);
export default List;
