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
//ค้นหาข้อมูลใน array filter(รีเทิร์นเป็น array ) ,find(หาคนคนเดียว)

//Example if student has attended 4 of 5 days , thie attendance percentage is ( 4 / 5 ) * 100 = 80

console.log(`--------------getAttendeaceRate1--------------------`)

const getAttendeace = (students = [] ) => {
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


console.log(`--------------getAVG--------------------`)


const getAVG = (students = [] ) => {
    return students.map(students => {
    const sum =  students.testScores.reduce((pre , post) => {
        return pre + post
    } , 0)

    return `The average score ${students.name} is ${+ sum / students.testScores.length}`
})};

console.log("getAVG : " , getAVG(students))



console.log(`--------------underPerformStudents--------------------`)


const underPerformStudents = (students = []) => {
  
    const stname = students.filter((students) => {
        const stname2 = ((students.attendance.filter(Boolean).length / students.attendance.length) * 100) < 80

        return stname2
    }).map((students) => students.name)
  

  const attendClass = students
    .map((students) => {
      const attendClass = students.attendance.reduce((present, absent) => {
        return present + absent
      })
      const totalattend = (attendClass / students.attendance.length) * 100

      return totalattend
    })
    .filter((totalatt) => totalatt <= 60)

  const avgScore = students
    .map((students) => {
      const totaltest = students.testScores.length
      const sum = students.testScores.reduce((pre, post) => {
        return pre + post
      }, 0)
      const sumof = sum / totaltest

      return sumof
    })
    .filter((total) => total < 70)

  return `name : ${stname} , attendaceRate : ${attendClass} , avg : ${avgScore}`
}


console.log(underPerformStudents(students))








// const getAttendanceRate = (students) => {
//   const { attendance } = students;
//   let percentage = 0;
//   attendance.forEach((rate) => {
//       if (rate) percentage += 1;
//   });
//   return (percentage / attendance.length) * 100;
// }
// const getAvgScore = (student) => {
//   const { testScores } = student;
//   const totalScore = testScores.reduce((acc, curr) => acc + curr, 0);
//   return totalScore / testScores.length;
// }
// const underPerformStudent = (students) => {
//   const dangerStudents = students.filter(student => getAvgScore(student) < 70 && getAttendanceRate(student) < 80);
//   return dangerStudents.map((student) => (
//       {
//           name: student.name,
//           attendanceRate: getAttendanceRate(student),
//           avgScore: getAvgScore(student)
//       }
//   ));
// }
// console.log(getAttendanceRate(students[0]));
// console.log(getAvgScore(students[0]));
// console.log(underPerformStudent(students));















