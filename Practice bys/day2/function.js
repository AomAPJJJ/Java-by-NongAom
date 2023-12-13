const students = [
    {
      name: "Sophia",
      attendance: [true, true, false, true, true],
      testScores: [88, 92, 85, 78, 90]
    },
    {
      name: "Mason",
      attendance: [true, true, true, true, false],
      testScores: [70, 82, 88, 75, 62]
    },
    {
      name: "Isabella",
      attendance: [true, false, false, true, true],
      testScores: [68, 71, 70, 60, 78]
    },
    {
      name: "Liam",
      attendance: [true, true, true, true, true],
      testScores: [90, 87, 92, 88, 95]
    },
    {
      name: "Olivia",
      attendance: [true, true, true, true, false],
      testScores: [72, 78, 75, 80, 62]
    }
  ]
 
  console.log(`--------------getAttendeaceRate1--------------------`)
  
 function getAttendeace(students) {
        const stname1 =  students.filter((student) => {
          return ((student.attendance.filter(Boolean).length / student.attendance.length ) * 100 ) < 80
        }).map((students) => students.name)
  
       const findAtt =students.map(students => {
          const totalDay = students.testScores.length
          const attend = students.attendance.reduce((present , absent) => {
              return present + absent
              
          } , )
  
          const less =(( attend / totalDay) * 100)
          return less
         
      }).filter((total) => total < 80)
  
      return `the attendace of ${stname1} is ${findAtt} `
  }
  
  console.log(getAttendeace(students))