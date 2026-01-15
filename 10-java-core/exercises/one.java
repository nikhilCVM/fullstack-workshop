
class Person{

    private String name;
    private int age;
    private String email;

    public void setAge(int age){
        this.age = age;

        
    }
    public int getAge(){
        return age;

    }
    public setname(){
        this.name = name;


    }
    public getname(){
        return name;

    }
    public setemail(){
        if( email )
         this.email = email;

    }
    public getemail(){
        return email;

    }
    public person(){
        

    }
    public person(String name, int age, String email){
        setname();
        setAge();
        setemail();


    }



Person p1 = new Person();
Person p2 = new Person("John", 25, "john@email.com");
p2.setAge(30);
System.out.println(p2);  // Person{name='John', age=30, email='john@email.com'}
}


////////////////////////////////////////////////////////////////

public class Person {

    // Private fields
    private String name;
    private int age;
    private String email;

    // No-argument constructor
    public Person() {
    }

    // All-argument constructor
    public Person(String name, int age, String email) {
        this.name = name;
        setAge(age);       // use setter for validation
        setEmail(email);   // use setter for validation
    }

    // Getter and Setter for name
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    // Getter and Setter for age (validation: 0–150)
    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        if (age >= 0 && age <= 150) {
            this.age = age;
        } else {
            throw new IllegalArgumentException("Age must be between 0 and 150");
        }
    }

    // Getter and Setter for email (validation: must contain '@')
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        if (email != null && email.contains("@")) {
            this.email = email;
        } else {
            throw new IllegalArgumentException("Email must contain '@'");
        }
    }

    // toString() method
    @Override
    public String toString() {
        return "Person{" +
                "name='" + name + '\'' +
                ", age=" + age +
                ", email='" + email + '\'' +
                '}';
    }
}
