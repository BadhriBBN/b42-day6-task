class person{
    constructor(firstname,lastname,age,experience,degree){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.experience = experience;
        this.degree = degree;
    }


 person_details() {
      let data =`
      Name: ${this.firstname} ${this.lastname}
      Age: ${this.age}
      Experience:${this.experience}
      Degree:${this.degree}
      `;
          return data;
    }
}
 let person1=new person("Badhri","Nath",22,2,"BA");
 let person2=new person("bobby","badhra",20,3,"BA tamil");
 let person3=new person("seenu","adithya",18,4,"B.sc viscom");

 let array_persons=[person1,person2,person3];

 array_persons.forEach((data)=>console.log(data.person_details()));

