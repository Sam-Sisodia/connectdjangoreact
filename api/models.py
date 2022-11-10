from django.db import models

# Create your models here.

class Student(models.Model):
    name = models.CharField(max_length=20)
    address = models.CharField(max_length=20)
    contact = models.IntegerField()





'''

 const[students,setStudents]=useState([])


  useEffect(()=>{
    async function getAllStudent()
    {
      try{

        const students = await axios.get("http://127.0.0.1:8000/student/")
        console.log(students.data)
        setStudents(students.data)

      }
      catch(error){

      }
    }
    getAllStudent()

  },[])










  return (
    <div className="App">
      <h1>Conect React JS to Django </h1>

     
    </div>
  );
}

export default App;








'''