namespace FullStack.WebApi.Models
{
    public class Employee
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public int PhoneNumber { get; set; }
        public int Salary { get; set; }
        public string Department { get; set; }
    }
}


//id: string;
//firstName: string;
//lastName: string;
//email: string;
//phoneNo: number;
//salary: number;
//department: string;